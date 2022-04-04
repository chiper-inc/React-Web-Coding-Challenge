import { fromJS } from "immutable";
import React from "react";
import { render } from 'react-testing-library';
import BikeConsumer from "../../api/BikeConsumer";
import BikeList from "../../components/BikeList";
import { Bike } from "../../context/bike";

test("<BikeList /> #display", () => {

  const bikes = [
    { title: "bike 1", id: 1 },
    { title: "bike 2", id: 2 },
    { title: "bike 3", id: 3 }
  ];
  const dispatch = jest.fn();//mock validar el dispatch

  //dependencia que consume la API
  jest.spyOn(BikeConsumer, "getAll");
  BikeConsumer.getAll = jest.fn(cb => cb({ data: { bikes }, isResult: 'success' }));

  //renderiza el contenedor
  const { container, getByTestId } = render(
    <Bike.Provider value={{
      state: fromJS({
        pagination: { bikes, page: 1 },
        search: { title: '', from: 0, to: 99999999999999 },
      }).setIn(['bikes', 'filter'], []), dispatch
    }}>
      <BikeList />
    </Bike.Provider>
  );
  expect(container.getElementsByTagName("li").length).toBe(7);
  //caputar el html de test ID y lo guarda
  expect(getByTestId('all-list').innerHTML).toMatchSnapshot();

  expect(BikeConsumer.getAll).toHaveBeenCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith({
    "key": [
      "bikes",
      "filter",
    ],
    "payload": [
      {
        "id": 1,
        "title": "bike 1",
      },
      {
        "id": 2,
        "title": "bike 2",
      },
      {
        "id": 3,
        "title": "bike 3",
      },
    ],
  });
});






