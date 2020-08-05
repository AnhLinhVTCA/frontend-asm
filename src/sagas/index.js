import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "../constants/actionTypes";
import * as action from "../actions";
import { getListProducts } from "../api";

function* fetchProduct() {
  try {
    const { data } = yield call(getListProducts);
    yield put(action.showListProducts(data));
  } catch (error) {
    yield (error.message);
  }
}

function* rootSaga() {
  yield takeLatest(type.GET_LIST_PRODUCTS, fetchProduct);
}

export default rootSaga;