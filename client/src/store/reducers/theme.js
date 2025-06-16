import * as actionTypes from "../actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
	mode: null
};

const reducer = (state = initialState, action) => {
	return updateObject(state, { mode: action.mode });
};

export default reducer;
