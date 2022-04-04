import { fromJS } from 'immutable';
import React, { useContext, useReducer } from "react";
import BikeForm from "../components/BikeForm";
import BikeHeader from "../components/BikeHeader";
import BikeList from "../components/BikeList";
import reducers from "../reducers/bike";




// Initial Data
export const Bike = React.createContext(fromJS({
  bikes: {
    all: [],
    filter: []
  },
  search: {
    title: '',
    from: 0,
    to: 999999999999999,
  },
  pagination: {
    page: 1,
    bikes: [],
  }
}));

export default () => {
  const globalStore = useContext(Bike);
  const [state, dispatch] = useReducer(reducers, globalStore);
  return (
    <Bike.Provider value={{ state, dispatch }}>
      <BikeHeader />
      <BikeForm />
      <BikeList />
    </Bike.Provider>
  );
};

