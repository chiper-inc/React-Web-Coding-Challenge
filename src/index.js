import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BikeStolenIndexContainer} from './BikeStolenIndex/BikeStolenIndex.container';
import './index.css';

import { configureStore as GeneralStore } from './store/configureStore';


const store = GeneralStore();



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BikeStolenIndexContainer >
      </BikeStolenIndexContainer>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


