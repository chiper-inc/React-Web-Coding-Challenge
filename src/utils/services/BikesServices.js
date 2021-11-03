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

const searchForTitle = async (title) => {
  try {
    const res = await axios.get(
      `${URL}/v3/search?per_page=10&manufacturer=${title}&location=berlin&stolenness=proximity`
    );
    // console.log('index response', res)
    return res.data;
  } catch (e) {
    throw e;
  }
};

const searchID = async (id) => {
  try {
    const res = await axios.get(`${URL}/v3/bikes/${id}`);
    // console.log('searchID response', res);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export default { index, searchID, searchForTitle };
