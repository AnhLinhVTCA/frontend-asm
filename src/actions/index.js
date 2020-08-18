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

export const openDisplayLoginForm = () => {
  return {
    type: type.OPEN_LOGIN_MODAL
  }
}

export const closeDisplayLoginForm = () => {
  return {
    type: type.CLOSE_LOGIN_MODAL
  }
}

export const displayFilter = () => {
  return {
    type: type.DISPLAY_FILTER
  }
}

export const displaySearch = () => {
  return {
    type: type.DISPLAY_SEARCH
  }
}

export const openQuickView = (item) => {
  return {
    type: type.OPEN_QUICK_VIEW,
    item
  }
}

export const closeQuickView = () => {
  return {
    type: type.CLOSE_QUICK_VIEW
  }
}

export const setIsHomePage = (isHomePage) => {
  return {
    type: type.IS_HOME_PAGE,
    isHomePage
  }
}

export const getProductDetail = (id, data) => {
  return {
    type: type.GET_PRODUCT_DETAIL,
    id,
    data
  }
}

export const addProductToCart = (data) => {
  return {
    type: type.ADD_TO_CART,
    data
  }
}

export const getProductIntoCart = () => {
  return {
    type: type.GET_PRODUCT_TO_CART,
  }
}

export const showProductToCart = (data) => {
  return {
    type: type.SHOW_LIST_PRODUCTS_IN_CART,
    data
  }
}

export const userLogin = (state, user = {}) => {
  return {
    type: type.USER_LOGIN,
    state,
    user
  }
}
export const getUserLogin = (user) => {
  return {
    type: type.GET_USER_LOGIN,
    user
  }
}