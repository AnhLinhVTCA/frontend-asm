import * as type from "../constants/actionTypes";

export const listProducts = () => {
  return {
    type: type.GET_LIST_PRODUCTS
  }
}

export const showListProducts = (data) => {
  return {
    type: type.SHOW_LIST_PRODUCTS,
    data
  }
}

export const toggleDisplayQuickCart = () => {
  return {
    type: type.TOGGLE_DISPLAY_QUICK_CART
  }
}

export const openDisplayQuickCart = () => {
  return {
    type: type.OPEN_QUICK_CART
  }
}

export const closeDisplayQuickCart = () => {
  return {
    type: type.CLOSE_QUICK_CART
  }
}