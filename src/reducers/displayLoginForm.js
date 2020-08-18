import * as type from "../constants/actionTypes";

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case type.OPEN_LOGIN_MODAL:
      return state = true;
    case type.CLOSE_LOGIN_MODAL:
      return state = false;
    default:
      return state;
  }
}