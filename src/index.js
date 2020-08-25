import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './store'
import App from './App'
import { ROOT_ID, BASENAME_URL } from './AppSettings'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={BASENAME_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById(ROOT_ID)
)
serviceWorker.unregister()
