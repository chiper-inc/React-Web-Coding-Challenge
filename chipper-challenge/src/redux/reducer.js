const initialState = {
    stolenBikes: [],
    getBikesById: {},
};

const bikes = (state = initialState, action) => {
    switch (action.type) {
        case 'STOLEN_BIKES':
            return {
                ...state,
                stolenBikes: action.payload,
            };

        case 'GET_BY_ID': {
            return {
                ...state,
                getBikesById: action.payload,
            };
        }
        case 'GET_BIKES': {
            const { description, from, to } = action.payload;
            let copy = state.stolenBikes.slice();
            if (description) copy = copy.filter((bike) => bike.description && bike.description.includes(description));
            if (from) copy = copy.filter((bike) => bike.year >= parseInt(from));
            if (to) copy = copy.filter((bike) => bike.year <= parseInt(to));
            return {
                ...state,
                stolenBikes: copy,
            };
        }
        default:
            return state;
    }
};

export default bikes;
