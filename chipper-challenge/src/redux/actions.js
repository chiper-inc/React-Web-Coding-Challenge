import axios from 'axios';

export const getBikes = () => async (dispatch) => {
    dispatch({ type: 'LOADING' });
    try {
        const response = await axios.get(
            `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=berlin&distance=10&stolenness=proximity`
        );
        dispatch({ type: 'STOLEN_BIKES', payload: response.data.bikes });
    } catch (err) {
        console.log(err);
    }
};

export const searchBikes =
    ({ title, from, to }) =>
    async (dispatch) => {
        dispatch({ type: 'LOADING' });
        dispatch({ type: 'GET_BIKES', payload: { title, from, to } });
    };
