import * as type from "../constants/actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  if (action.type === type.SHOW_LIST_PRODUCTS_IN_CART) {
    return [...state, ...action.data];
  }
  return state;
}