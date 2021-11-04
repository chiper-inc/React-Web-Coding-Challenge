import React from 'react';
import { shallow } from 'enzyme';
import Details from '../views/details';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('renders the component Home View', () => {
  const history = createMemoryHistory();
  const route = '/details/360966';
  history.push(route);
  const component = shallow(
    <Router history={history}>
      <Details />
    </Router>
  );
  expect(component).toMatchSnapshot();
});
