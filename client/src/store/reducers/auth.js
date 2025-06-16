import * as actionTypes from "../actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
	profileType: null,
	email: null,
	tokenId: null,
	userId: null,
	customerId: null,
	sellerId: null,
	deliveryId: null,
	message: null,
	error: null,
	loading: false,
	authRedirectPath: "/",
};

const ProfileType = (state, action) => {
	return updateObject(state, { profileType: action.profileType });
};

const authStart = (state, action) => {
	return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
	console.log(action);
	return updateObject(state, {
		email: action.email,
		tokenId: action.tokenId,
		userId: action.userId,
		customerId: action.customerId,
		sellerId: action.sellerId,
		deliveryId: action.deliveryId,
		message: action.message,
		error: null,
		loading: false,
	});
};

const authFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loading: false,
	});
};

const authLogout = (state, action) => {
	return updateObject(state, { profileType: null, email: null, tokenId: null, userId: null, customerId: null, sellerId: null, deliveryId: null, message: null });
};

const setAuthRedirectPath = (state, action) => {
	return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PROFILE_TYPE:
			return ProfileType(state, action);
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_FAIL:
			return authFail(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		case actionTypes.SET_AUTH_REDIRECT_PATH:
			return setAuthRedirectPath(state, action);
		default:
			return state;
	}
};

export default reducer;
