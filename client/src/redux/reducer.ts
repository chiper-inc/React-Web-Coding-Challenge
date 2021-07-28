
const initialState = {
  cases: []
}

interface Iaction {
  type: string, 
  payload?: string | object[] | boolean, 
}

const rootReducer = (state = initialState, action: Iaction) => {
  switch (action.type) {
    
    default: return state
  }
}

export default rootReducer;