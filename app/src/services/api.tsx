import axios from 'axios';

const BASE_URL = `https://bikeindex.org:443/api/v3/`;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
