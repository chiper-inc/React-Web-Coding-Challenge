/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const URL = 'https://bikeindex.org:443/api';

const index = async (page = 1) => {
  try {
    const res = await axios.get(
      `${URL}/v3/search?page=${page}&per_page=10&location=berlin&stolenness=proximity`
    );
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

export default { index };
