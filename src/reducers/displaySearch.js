import * as type from "../constants/actionTypes";

let initialState = false;

export default (state = initialState, action) => {
  if (action.type === type.DISPLAY_SEARCH) return !state;
  return state;
}
