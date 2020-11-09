import 'rxjs';

const initialState = {
    ui :{
        generalLoading:false
    }
}

/*Reduces*/
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_STAUTS_LOAD":
            const temp = Object.assign({},
                state ,
                {
                    ui : {
                        generalLoading : action.payload 
                    }
                });
        return temp  
       
        default: 
            return state;
    }
}

export default reducer;
