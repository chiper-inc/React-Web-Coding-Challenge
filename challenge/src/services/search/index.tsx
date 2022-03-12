import globalAxios from 'axios';

export const searchBikes = (page = 1) => {
  const config = {
    params: {
      page,
      per_page: 10,
      location: 'Berlin',
      distance: 10,
      stolenness: 'proximity',
      access_token: 'S6Khp0Ja1_328-GLafr7Z16KXxiJ6dya8t3HxYtT3t4',
    },
  };
  return globalAxios.get(`${process.env.REACT_APP_URL_API}search`, config);
};
