import axios from 'axios';

export const bikesApi = axios.create({
    baseURL: 'https://bikeindex.org:443/api/v3'
});
