const initialState = {
    stolenBikes: [],
    getBikesById: {},
    loading: false,
    pagination: {
        page: 0,
        totalPages: 1,
    },
};

const bikes = (state = initialState, action) => {
    switch (action.type) {
        case 'STOLEN_BIKES':
            console.log(Math.floor(action.payload.length / 10));
            return {
                ...state,
                stolenBikes: action.payload,
                loading: false,
                pagination: {
                    ...state.pagination,
                    totalPages: Math.floor(action.payload.length / 10) - 1,
                },
            };

        case 'LOADING':
            return {
                ...state,
                loading: true,
            };

        case 'GET_BY_ID': {
            return {
                ...state,
                getBikesById: action.payload,
                loading: false,
            };
        }
        case 'GET_BIKES': {
            const { title, from, to } = action.payload;
            let copy = [...state.stolenBikes];
            if (title)
                copy = copy.filter(
                    (bike) =>
                        bike.title &&
                        bike.title.toLowerCase().includes(title.toLowerCase())
                );
            if (from) copy = copy.filter((bike) => bike.year >= parseInt(from));
            if (to) copy = copy.filter((bike) => bike.year <= parseInt(to));
            copy = copy.sort((a, b) => a.year - b.year);
            return {
                ...state,
                stolenBikes: copy,
                loading: false,
            };
        }
        case 'SET_PAGE':
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.payload,
                },
            };
        default:
            return state;
    }
};

export default bikes;
