import axios from "../../axios/axiosBaseURL";
import * as actionTypes from "../actionTypes";

export const onSellerAgentSignupStart = () => {
	return {
		type: actionTypes.START,
	};
};

export const onSellerAgentSignupSuccess = (
	userId,
	dokanName,
	message,
	result
) => {
	return {
		type: actionTypes.SUCCESS,
		userId: userId,
		dokanName: dokanName,
		message: message,
		result: result,
	};
};

export const onSellerAgentSignupFail = (error) => {
	return {
		type: actionTypes.FAIL,
		error: error,
	};
};

export const onSellerAgentSignup = (userId, dokanName, email, tokenId) => {
	console.log(userId, dokanName, email, tokenId);
	return (dispatch) => {
		try {
			dispatch(onSellerAgentSignupStart());
			const authData = { userId: userId, email: email, dokanName: dokanName };

			axios
				.post("/dokan/create", authData, {
					headers: { token: `Bearer ${tokenId}` },
				})
				.then((response) => {
					console.log("authSellerAgentSignup -----  ", response.data);
					console.log("userId", response.data.userId);
					console.log("dokanName", response.data.dokan);
					console.log("message", response.data.message);
					console.log("result", response.data.result);

					try {
						if (response.data.userId) {
							dispatch(
								onSellerAgentSignupSuccess(
									response.data.userId,
									response.data.dokan,
									response.data.message,
									response.data.result
								)
							);
						} else {
							dispatch(onSellerAgentSignupFail(response.data.errors));
						}
					} catch (error) {
						throw Error(error);
					}
				})
				.catch((err) => {
					console.log(err.response);
					dispatch(onSellerAgentSignupFail(err.response.data.errors));
				});
		} catch (error) {
			console.log(error);
		}
	};
};
