import axios from "axios";

const baseURL = process.env.API || 'http://localhost:8080';

const intanceAxios = axios.create({ baseURL });

export default intanceAxios;