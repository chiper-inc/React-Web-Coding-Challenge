/* eslint-disable camelcase */
import BikeIndexApi from '../../api/BikeIndexApi';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { StolenBikes } from '../../interfaces/StolenBikesInterface';

export type Action = {
  type: string;
  payload: SimpleStolenBikes[] & boolean;
};

export const GET_STOLEN_BIKES = 'GET_STOLEN_BIKES';
export const SET_ERROR = 'SET_ERROR';

export const getStolenBikes = () => function (dispatch: any) {
  return BikeIndexApi.get<StolenBikes>('/search?page=1&per_page=100&location=Berlin&distance=10&stolenness=proximity')
    .then((response) => {
      dispatch({
        type: GET_STOLEN_BIKES,
        payload: response.data.bikes.map(({
          id, title, description, date_stolen, stolen_location, large_img,
        }):SimpleStolenBikes => ({
          id,
          title,
          dateOfTheft: (new Date(date_stolen * 1000)),
          description: `${description?.substr(0, 100)}...`,
          locationOfTheft: stolen_location,
          img: large_img,
        })),
      });
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
        payload: true,
      });
    });
};
