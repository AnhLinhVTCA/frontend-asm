import * as type from "../constants/actionTypes";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case type.SHOW_LIST_PRODUCTS:
      state = { ...state, data: action.data }
      return state;
    default:
      return state
  }
}