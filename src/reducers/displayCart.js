import * as type from "../constants/actionTypes";

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case type.OPEN_QUICK_CART:
      return state = true;
    case type.CLOSE_QUICK_CART:
      return state = false;
    default:
      return state;
  }
}