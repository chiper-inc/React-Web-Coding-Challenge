import { createTheme } from '@material-ui/core/styles';
import { pink, indigo } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
  typography: {
    fontFamily: 'Bree Serif',
    fontSize: 12,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;
