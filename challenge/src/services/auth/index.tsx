import globalAxios, { AxiosRequestConfig } from 'axios';

export const authorizeApplication = ({ code }: { code: string }) => {
  const config: AxiosRequestConfig = {
    url: `${process.env.REACT_APP_API_URL_BASE}oauth/token`,
    method: 'post',
    params: {
      client_id: process.env.REACT_APP_API_APP_ID,
      client_secret: process.env.REACT_APP_API_APP_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.REACT_APP_APP_REDIRECT,
    },
  };
  globalAxios
    .request(config)
    .then((response) => {
      console.log('AUTH SUCCESS', response);
    })
    .catch((error) => {
      console.warn('AUTH ERROR', error.response);
    });
};
