import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl.js';

export const fetchData = () => (dispatch) => {

    dispatch(dataLoading(true));

    return fetch(baseUrl)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Oops, something went wrong');
          console.log('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        console.log(error);
            var errmess = new Error('Oops, something went wrong');
            throw errmess;
      })
    .then(response => response.json())
    .then(response => dispatch(addData(response)))
    .catch(error => dispatch(dataFailed(error.message)));
}

export const dataLoading = () => ({
    type: ActionTypes.DATA_LOADING
});

export const dataFailed = (errmess) => ({
    type: ActionTypes.DATA_FAILED,
    payload: errmess
});

export const addData = (data) => ({
    type: ActionTypes.ADD_DATA,
    payload: data
});
function convertTime(time){
  var date = new Date(time);
  return(Math.floor(date.getTime() / 1000)) 

};
export const postQuery = (query) => (dispatch) => {
 console.log(query);
  return fetch(baseUrl + "&query="+query.query+"&occurred_after="+query.occurred_after+"&occurred_before="+query.occurred_before)
.then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
        throw error;
  })
.then(response => response.json())
.then(response => dispatch(addData(response)))
.catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};

