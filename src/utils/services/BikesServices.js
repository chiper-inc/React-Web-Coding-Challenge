import axios from "axios";

const URL = 'https://bikeindex.org:443/api';
const INDEX = `${URL}/v3/search?page=1&per_page=10&location=berlin&stolenness=proximity`;

const index = async () => {
  try {
    const res = await axios.get(INDEX);
    // console.log('index response', res)
    return res.data;
  } catch (e) {
    throw e;
  }
};
/* const authorization = async (params) => {
  try {
    const r = await axios.post(`${AUTH}`, params);
    return r.data;
  } catch (e) {
    throw e;
  }
};

const cip = async (params) => {
  try {
    const r = await axios.post(`${CIP}`, params);
    return r.data;
  } catch (e) {
    throw e;
  }
}; */

export default {
  index,
};
