import axios from "../utils/axios";

export const getListProducts = () => {
  return axios.get('/api/get-list-products');
}