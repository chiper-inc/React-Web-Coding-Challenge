import 'rxjs';

const initialState = {
    user : {
        name:"visitor",
        profile:"visitor",
    },
    ui :{
        generalLoading:"true"
    }
}

/*Reduces*/
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_PROFILE":
            const temp = Object.assign({},
                state ,
                {
                    user : {
                        profile : action.payload 
                    }
                });
        return temp  
       
        default: 
            return state;
    }
}

export default reducer;
