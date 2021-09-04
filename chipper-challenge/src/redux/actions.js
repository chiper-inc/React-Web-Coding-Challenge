import axios from 'axios';

export const getBikes = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=berlin&distance=5&stolenness=proximity`
        );
        dispatch({ type: 'STOLEN_BIKES', payload: response.data.bikes });
    } catch (err) {
        console.log(err);
    }
};

export const getBikesById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://bikeindex.org:443/api/v3/bikes/${id} `
        );
        dispatch({ type: 'GET_BY_ID', payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const searchBikes = ({description, from, to}) => async (dispatch) => {
    dispatch({ type: 'GET_BIKES', payload: { description, from, to } });
};
