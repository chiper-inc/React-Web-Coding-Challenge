import axios from 'axios';

const GET_ALL = 'https://bikeindex.org/api/v3/search?page=';
const GET_BY_ID = 'https://bikeindex.org:443/api/v3/bikes/';
const GET_TOTAL =
  'https://bikeindex.org:443/api/v3/search/count?location=IP&distance=10&stolenness=stolen';

export const fetchBikes = (page) =>
  axios.get(`${GET_ALL}${String(page)}&per_page=10&stolenness=stolen`);
export const fetchBikeById = (id) => axios.get(GET_BY_ID + id);
export const fetchTotalStolen = () => axios.get(GET_TOTAL);
