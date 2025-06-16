import axios from "../../axios/axiosBaseURL";
import * as actionTypes from "../actionTypes";


export const onAddProductSuccess = ( email, tokenId, userId, customerId, sellerId, deliveryId, message ) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		userId: userId,
		
	};
};

export const onAddProductFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error,
	};
};


export const onAddProduct = ( userId, dokanName, title, description, category, type, item, height, width, weight, time, file ) => {
	console.log( userId, dokanName, title, description, category, type, item, height, width, weight, time, file );
	return (dispatch) => {
		dispatch();
		const authData = { userId: userId, dokanName: dokanName, title: title, description: description, category: category, type: type, item: item, height: height,  width: width, weight: weight, time: time,file: file };
		axios
			.post("/", authData)
			.then((response) => {
				console.log("-------Response from onAddProduct-------");
				try {
					if (response.data.userId) {

						dispatch(
							onAddProductSuccess(
								// response.data.email,
								// response.data.tokenId,
								 response.data.userId,
								// response.data.customerId,
								// response.data.sellerId,
								// response.data.deliveryId,
								// response.data.message
							)
						);
					} else {
						dispatch(onAddProductFail(response.data.errors));
					}
				} catch (error) {
					console.log("ERROR ::", error);
				}
			})
			.catch((err) => {
				console.log(err);
				dispatch(onAddProductFail(err.response.data.error));
			});
	};
};




