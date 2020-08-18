import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "../constants/actionTypes";
import * as action from "../actions";
import { getListProducts, getProductDetail, getUser } from "../api";
import { isArray } from "jquery";

function* fetchProduct() {
  try {
    const { data } = yield call(getListProducts);
    yield put(action.showListProducts(data));
  } catch (error) {
    yield (error.message);
  }
}

function* fetchProductDetail({ id }) {
  try {
    if (!id) throw new Error("ID invalid!");
    const { data } = yield call(getProductDetail, id);
    yield put(action.getProductDetail(null, data));
  } catch (error) {
    yield (error.message);
  }
}

function* addToCart({ data }) {
  try {
    if (!data) throw new Error("Data not null!");
    let dataIntoCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (dataIntoCart.length > 0) {
      if (isArray(data)) {
        dataIntoCart = data;
      }
      else {
        for (const item of dataIntoCart) {
          if (item.id === data.id && item.color === data.color && item.size === data.size) {
            item.quantity += data.quantity;
            return localStorage.setItem('cart', JSON.stringify(dataIntoCart));
          }
        }
        dataIntoCart.push(data);
      }
    }
    else {
      dataIntoCart.push(data);
    }
    localStorage.setItem('cart', JSON.stringify(dataIntoCart));
    const listProduct = [];
    for (const item of dataIntoCart) {
      const { data } = yield call(getProductDetail, item.id);
      listProduct.push({ id: data._id, name: data.productName, price: data.price, quantity: item.quantity, image: data.imagePath[0] })
    }
    yield put(action.showProductToCart(listProduct));
  } catch (error) {
    yield (error.message);
  }
}

function* getProductIntoCart() {
  try {
    const data = JSON.parse(localStorage.getItem('cart'))
    if (!data) throw new Error("Data not null");
    const listProduct = [];
    for (const item of data) {
      const { data } = yield call(getProductDetail, item.id);
      listProduct.push({ id: data._id, name: data.productName, price: data.price, quantity: item.quantity, image: data.imagePath[0] })
    }
    yield put(action.showProductToCart(listProduct));
  } catch (error) {
    yield (error.message);
  }
}

function* userLogin({ state }) {
  try {
    if (state.email === "" || state.password === "" || state.password.length < 4) throw new Error("Invalid Email or Password!");
    const { data } = yield call(getUser, state);
    yield put(action.getUserLogin(data));
  } catch (error) {
    yield (error.message);
  }
}

function* rootSaga() {
  yield takeLatest(type.GET_LIST_PRODUCTS, fetchProduct);
  yield takeLatest(type.GET_PRODUCT_DETAIL, fetchProductDetail);
  yield takeLatest(type.ADD_TO_CART, addToCart);
  yield takeLatest(type.GET_PRODUCT_TO_CART, getProductIntoCart);
  yield takeLatest(type.USER_LOGIN, userLogin);
}

export default rootSaga;