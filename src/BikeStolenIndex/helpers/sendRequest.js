
const BASE_URL = 'https://bikewise.org:443/api/v2/';

  async function callApi(endpoint, options = {}, body = {}, params ="") {
    
    options.headers = {
      'Content-Type' : 'application/json',
      Accept: 'application/json',
    };
    const url = BASE_URL + endpoint+"?"+params;


    const response = await fetch(url, options,body);
    const data = await response.json(); 
    return data;
}

export default callApi;
