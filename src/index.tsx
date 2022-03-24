import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './components/Home';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from "react-redux";
import store from "./redux/store";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#262626',
      contrastText: '#b7c2ce',
      dark: '#e1e8ef',
      light: '#f9fafc'
    }

  }
});

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider theme={customTheme}>
                <Home/>
            </ThemeProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
