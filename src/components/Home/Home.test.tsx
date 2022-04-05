import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Home } from './index';
import configStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { sagaMiddleware } from "../../redux/store";

const mockStore = configStore([sagaMiddleware]);

describe('Home Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      bykes: {
        data: []
      }
    });
  });

  test('render component', () => {
    const HomeComponent = render(<Provider store={store}>
      <Home/>
    </Provider>);
    expect(HomeComponent.findAllByAltText('Total Bykes')).not.toBeFalsy();
  });

  test('run onFindBykes', () => {
    const HomeComponent = render(<Provider store={store}>
      <Home/>
    </Provider>);

    const button = HomeComponent.getByTitle('Find Cases');
    fireEvent.click(button);
    expect(HomeComponent.findAllByAltText('Total Bykes: 0')).toBeTruthy();
  });
});
