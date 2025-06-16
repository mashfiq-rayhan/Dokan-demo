import * as actionTypes from "../actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
	userId: null,
	dokanName: null,
	message: null,
	result: null
};




const onSuccess = (state, action) => {
	console.log(action);
	return updateObject(state, {
		userId: action.userId,
		dokanName: action.dokanName,
		message: action.message,
		result: action.result
	});
};

const onFail = (state, action) => {
	return updateObject(state, {
		error: action.error
	});
};


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SUCCESS:
			return onSuccess(state, action);
		case actionTypes.FAIL:
			return onFail(state, action);
		default:
			return state;
	}
};

export default reducer;
