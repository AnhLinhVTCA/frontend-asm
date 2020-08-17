import axios from "axios";

const baseURL = 'http://localhost:8080';

const intanceAxios = axios.create({ baseURL });

export default intanceAxios;