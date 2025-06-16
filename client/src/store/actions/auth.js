import axios from "../../axios/axiosBaseURL";
import * as actionTypes from "../actionTypes";

export const ProfileType = (profileType) => {
	return {
		type: actionTypes.PROFILE_TYPE,
		profileType: profileType,
	};
};

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START,
	};
};

export const authSuccess = (
	email,
	tokenId,
	userId,
	customerId,
	sellerId,
	deliveryId,
	message
) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		email: email,
		tokenId: tokenId,
		userId: userId,
		customerId: customerId,
		sellerId: sellerId,
		deliveryId: deliveryId,
		message: message,
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error,
	};
};

export const authLogout = () => {
	console.log("Logged ----------- OUT");
	// localStorage.removeItem("tokenId");
	// localStorage.removeItem("userId");
	// localStorage.removeItem("customerId");
	// localStorage.removeItem("sellerId");
	// localStorage.removeItem("deliveryId");
	// localStorage.removeItem("message");
	// localStorage.removeItem("expiresIn");
	return {
		type: actionTypes.AUTH_LOGOUT,
	};
};

export const checkAuthTimeout = (expirationTime) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(authLogout());
		}, expirationTime * 10000);
	};
};

export const authSignup = (
	profileType,
	firstName,
	lastName,
	email,
	password,
	phoneNumber,
	nid,
	gender,
	birthday
) => {
	console.log(
		profileType,
		firstName,
		lastName,
		email,
		password,
		phoneNumber,
		nid,
		gender,
		birthday
	);
	return (dispatch) => {
		dispatch(authStart());
		const authData = {
			status: profileType,
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			phoneNumber: phoneNumber,
			nid: nid,
			gender: gender,
			birthday: birthday,
		};
		// const url = "http://localhost:5000/signup";
		axios
			.post("/signup", authData)
			.then((response) => {
				console.log("-------Response from authSignUP-------");
				console.log("email", response.data.email);
				console.log("tokenId", response.data.tokenId);
				console.log("userId", response.data.userId);
				console.log("customerId", response.data.customerId);
				console.log("sellerId", response.data.sellerId);
				console.log("deliveryId", response.data.deliveryId);
				console.log("message", response.data.message);
				console.log("expiresIn", response.data.expiresIn);
				try {
					if (response.data.tokenId) {
						const expirationDate = new Date(
							new Date().getTime() + response.data.expiresIn
						);

						// check if 200 / 400

						// localStorage.setItem("email", response.data.email);
						// localStorage.setItem("tokenId", response.data.tokenId);
						// localStorage.setItem("userId", response.data.userId);
						// localStorage.setItem("customerId", response.data.customerId);
						// localStorage.setItem("sellerId", response.data.sellerId);
						// localStorage.setItem("deliveryId", response.data.deliveryId);
						// localStorage.setItem("message", response.data.message);
						// localStorage.setItem("expiresIn", expirationDate);

						dispatch(
							authSuccess(
								response.data.email,
								response.data.tokenId,
								response.data.userId,
								response.data.customerId,
								response.data.sellerId,
								response.data.deliveryId,
								response.data.message
							)
						);
						dispatch(checkAuthTimeout(response.data.expiresIn));
					} else {
						dispatch(authFail(response.data.errors));
					}
				} catch (error) {
					console.log("ERROR ::", error);
				}
			})
			.catch((err) => {
				console.log(err);
				dispatch(authFail(err.response.data.error));
			});
	};
};

export const authLogin = (profileType, email, password) => {
	return (dispatch) => {
		dispatch(authStart());
		const authData = {
			status: profileType,
			email: email,
			password: password,
			returnSecureToken: true,
		};

		// const url = "http://localhost:5000/login";

		axios
			.post("/login", authData)
			.then((response) => {
				console.log("-------Response from authLogin-------");
				console.log("tokenId", response.data.tokenId);
				console.log("email", response.data.email);
				console.log("userId", response.data.userId);
				console.log("customerId", response.data.customerId);
				console.log("sellerId", response.data.sellerId);
				console.log("deliveryId", response.data.deliveryId);
				console.log("message", response.data.message);
				console.log("expiresIn", response.data.expiresIn);
				try {
					if (response.data.tokenId) {
						const expirationDate = new Date(
							new Date().getTime() + response.data.expiresIn
						);

						// check if 200 / 400

						// localStorage.setItem("tokenId", response.data.tokenId);
						// localStorage.setItem("email", response.data.email);
						// localStorage.setItem("userId", response.data.userId);
						// localStorage.setItem("customerId", response.data.customerId);
						// localStorage.setItem("sellerId", response.data.sellerId);
						// localStorage.setItem("deliveryId", response.data.deliveryId);
						// localStorage.setItem("message", response.data.message);
						// localStorage.setItem("expiresIn", expirationDate);

						dispatch(
							authSuccess(
								response.data.email,
								response.data.tokenId,
								response.data.userId,
								response.data.customerId,
								response.data.sellerId,
								response.data.deliveryId,
								response.data.message
							)
						);
					} else {
						dispatch(authFail(response.data.errors));
					}
				} catch (error) {
					console.log("ERROR ::", error);
				}
			})
			.catch((err) => {
				console.log("ERROR ::", err);
				dispatch(authFail(err.response.data.errors));
			});
	};
};


export const setAuthRedirectPath = (path) => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path: path,
	};
};

export const authCheckState = () => {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		if (!token) {
			dispatch(authLogout());
		} else {
			const expirationDate = new Date(localStorage.getItem("expirationDate"));
			if (expirationDate <= new Date()) {
				dispatch(authLogout());
			} else {
				const userId = localStorage.getItem("userId");
				dispatch(authSuccess(token, userId));
				dispatch(
					checkAuthTimeout(
						(expirationDate.getTime() - new Date().getTime()) / 1000
					)
				);
			}
		}
	};
};
