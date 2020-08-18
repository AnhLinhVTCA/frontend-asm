import { combineReducers } from "redux";
import listProducts from "./listProducts";
import displayCart from "./displayCart";
import displayFilter from "./displayFilter";
import displayLoginForm from "./displayLoginForm";
import displaySearch from "./displaySearch";
import isHomePage from "./isHomePage";
import listBanners from "./listBanners";
import productDetail from "./productDetail";
import productDetailQuickView from './productDetailQuickView';
import productIntoCart from './productIntoCart';
import user from "./user";

export default combineReducers({
  listProducts,
  productDetail,
  displayCart,
  displayFilter,
  displayLoginForm,
  displaySearch,
  isHomePage,
  listBanners,
  productDetailQuickView,
  productIntoCart,
  user
})