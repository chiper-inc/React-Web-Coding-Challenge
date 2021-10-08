import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minWidth: '80vw',
  },
  actionArea: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  gridContainer: {
    height: '100%',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cover: {
    minWidth: 200,
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
}));

const Bike = ({ handleDetails }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={() => handleDetails()}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.cover}
          image="https://files.bikeindex.org/uploads/Pu/488295/small_2020_Feb_Kona_Rove__1_.JPG"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} sm={6} className={classes.gridItem}>
                <div>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* title */}
                    2020 Kona Rove
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* description */}
                    With bike rack and fenders
                  </Typography>
                </div>
                <div>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* Color */}
                    Color
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* Color */}
                    Teal
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridItem}>
                <div>
                  <Typography component="h4" variant="h4" color="secondary">
                    {/* stolen */}
                    Stolen
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* stole date */}
                    Jun 27th, 6am
                  </Typography>
                </div>
                <div>
                  <Typography component="h4" variant="h4" color="secondary">
                    {/* stolen location */}
                    Stolen Location
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* Stolen Location */}
                    Hyattsville, MD - US
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default Bike;

Bike.propTypes = {
  handleDetails: PropTypes.func.isRequired,
};
