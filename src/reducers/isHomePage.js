import * as type from "../constants/actionTypes";

const initialState = false;

export default (state = initialState, action) => {
  if (action.type === type.IS_HOME_PAGE) return !state;
  return state = false;
}