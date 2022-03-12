import globalAxios  from 'axios';

export const authorizeApplication = ({ code }: { code: string }) => {
  const props = {
    client_id: process.env.REACT_APP_API_APP_ID,
    client_secret: process.env.REACT_APP_API_APP_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: process.env.REACT_APP_APP_REDIRECT,
  };
  return globalAxios
    .post(`${process.env.REACT_APP_API_URL_BASE}oauth/token`, props)
    .then((response) => {
      console.log('AUTH SUCCESS', response);
    })
    .catch((error) => {
      console.warn('AUTH ERROR', error.response);
    });
};
