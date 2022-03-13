import React, {useState} from 'react';
import './App.css';
import {createTheme, styled, ThemeProvider} from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#8e9ead',
      contrastText: 'white',
    },
  },
});

const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));
interface IApp{
  env: string
}
function App() {
  const [envTest, setEnvTest] = useState(process.env.REACT_APP_TEST);
  return (
      <ThemeProvider theme={customTheme}>
        <MyThemeComponent>Styled div with theme {envTest}</MyThemeComponent>
      </ThemeProvider>
  );
}

export default App;
