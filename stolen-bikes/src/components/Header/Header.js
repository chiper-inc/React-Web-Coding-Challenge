import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'whitesmoke',
  },
  toolbar: {
    minHeight: 200,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  logo: {
    height: 200,
    paddingRight: 20,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img className={classes.logo} src={logo} alt="logo" />
          </div>
          <div>
            <Typography color="primary" variant="h1">
              Police Department of Berlin
            </Typography>
            <Typography color="primary" variant="h3">
              Stolen Bikes
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
