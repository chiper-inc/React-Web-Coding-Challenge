import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Bike from './Bike/Bike';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 40,
    position: 'relative',
    gap: 15,
  },
  total: {
    position: 'absolute',
    right: '10%',
    top: -25,
  },
  item: {
    width: '100%',
  },
}));

const Bikes = ({ handleDetails }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h5" color="primary" className={classes.total}>
        Total: 20
      </Typography>
      <Grid item xs={12}>
        <Bike handleDetails={handleDetails} />
      </Grid>
      <Grid item xs={12}>
        <Bike />
      </Grid>
      <Grid item xs={12}>
        <Bike />
      </Grid>
    </Grid>
  );
};

export default Bikes;

Bikes.propTypes = {
  handleDetails: PropTypes.func.isRequired,
};
