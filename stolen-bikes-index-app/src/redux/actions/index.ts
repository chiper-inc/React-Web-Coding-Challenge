import BikeIndexApi from '../../api/BikeIndexApi';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { StolenBikes } from '../../interfaces/StolenBikesInterface';

export type Action = {
  type: string;
  payload: SimpleStolenBikes[];
};

export const GET_STOLEN_BIKES = 'GET_STOLEN_BIKES';

export const getStolenBikes = () => function (dispatch: any) {
  return BikeIndexApi.get<StolenBikes>('/search?page=1&per_page=100&location=Berlin&distance=10&stolenness=proximity')
    .then((response) => {
      dispatch({
        type: GET_STOLEN_BIKES,
        payload: response.data.bikes.map(({
          id, title, description, dateStolen, stolenLocation, largeImg,
        }):SimpleStolenBikes => ({
          id,
          title,
          dateOfTheft: (new Date(dateStolen * 1000)).toDateString(),
          description: `${description?.substr(0, 100)}...`,
          locationOfTheft: stolenLocation,
          img: largeImg,
        })),
      });
    });
};
