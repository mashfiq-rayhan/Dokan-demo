
import * as actionTypes from "../actionTypes";

export const onChangeTheme = (mode) => {
	return {
    type: actionTypes.MODE,
	mode: mode,
	};
};