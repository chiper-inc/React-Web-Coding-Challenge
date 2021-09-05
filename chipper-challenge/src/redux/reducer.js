const initialState = {
    stolenBikes: [],
    loading: false,
    type: 'all',
};

const bikes = (state = initialState, action) => {
    switch (action.type) {
        case 'STOLEN_BIKES':
            return {
                ...state,
                stolenBikes: action.payload,
                loading: false,
            };

        case 'LOADING':
            return {
                ...state,
                loading: true,
            };

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
                type: 'diff',
            };
        }

        default:
            return state;
    }
};

export default bikes;
