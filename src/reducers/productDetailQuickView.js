import * as type from "../constants/actionTypes";

const initialState = { status: false, data: null, };

export default (state = initialState, action) => {
  switch (action.type) {
    case type.OPEN_QUICK_VIEW:
      return { ...state, status: true, data: action.item };
    case type.CLOSE_QUICK_VIEW:
      return { ...state, status: false, data: null };
    default:
      return state;
  }
}