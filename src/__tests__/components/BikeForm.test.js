import { fromJS } from "immutable";
import React from "react";
import { fireEvent, getByTestId, render } from 'react-testing-library';
import BikeForm from "../../components/BikeForm";
import { Bike } from "../../context/bike";


test("<BikeForm /> #addBike-CHANGE", () => {
  const dispatch = jest.fn();

  const { container } = render(
    <Bike.Provider value={{ state: fromJS({ bikes: { filter: [] } }), dispatch }} >
      <BikeForm />
    </Bike.Provider >
  );

  fireEvent.keyUp(getByTestId(container, 'input-data-title'));
  fireEvent.change(getByTestId(container, 'input-data-title'));

});

