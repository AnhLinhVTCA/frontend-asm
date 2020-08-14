import { combineReducers } from "redux";
import listProducts from "./listProducts";
import displayCart from './displayCart';
import displayFilter from './displayFilter';
import displaySearch from './displaySearch';
import productDetail from './productDetail';
import productDetailQuickView from './productDetailQuickView';
import listBanners from "./listBanners";
import isHomePage from "./isHomePage";
import productIntoCart from "./productIntoCart";

export default combineReducers({
  listProducts,
  displayCart,
  displayFilter,
  displaySearch,
  productDetail,
  listBanners,
  isHomePage,
  productDetailQuickView,
  productIntoCart,
})