import axios from "../utils/axios";

export const getListProducts = () => {
  return axios.get('/api/list-products');
}

export const getProductDetail = id => {
  return axios.get(`/api/product-detail/${id}`)
}

export const getUser = state => {
  return axios.post("/api/admin/login", state)
}