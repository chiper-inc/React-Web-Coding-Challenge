import axios from 'axios';

export const BikeIndexApi = axios.create({
  baseURL: 'https://bikeindex.org:443/api/v3',
});

export default BikeIndexApi;
