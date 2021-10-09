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
import bikeImg from '../../../assets/img/bike.png';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '80vw',
    maxWidth: '80vw',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
    width: '100%',
  },
  gridContainer: {
    height: '100%',
    width: '100%',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  cover: {
    minWidth: 200,
    width: '20vw',
    height: '20vh',
    margin: 10,
    borderRadius: 10,
  },
}));

const Bike = ({
  handleDetails,
  handleBikeId,
  bikeId,
  thumb,
  title,
  description,
  frameColors,
  dateStolen,
  stolenLocation,
}) => {
  const classes = useStyles();
  const handleOnClick = () => {
    handleDetails();
    handleBikeId(bikeId);
  };
  return (
    <Card className={classes.root} onClick={handleOnClick}>
      <CardActionArea>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={4}>
            <CardMedia
              className={classes.cover}
              image={thumb || bikeImg}
              title="Live from space album cover"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Grid container className={classes.gridContainer}>
                  <Grid item xs={12} sm={6} className={classes.gridItem}>
                    <div style={{ marginRight: 15 }}>
                      <Typography component="h5" variant="h5" color="primary">
                        {/* title */}
                        {title}
                      </Typography>
                      <Typography component="p" variant="h6">
                        {/* description */}
                        {`${
                          description
                            ? description.slice(0, 50)
                            : 'No description available'
                        }...`}
                      </Typography>
                    </div>
                    <div>
                      <Typography component="h5" variant="h5" color="primary">
                        {/* Color */}
                        Color
                      </Typography>
                      <Typography component="p" variant="h6">
                        {/* Color */}
                        {frameColors
                          ? frameColors.map((color, index) => {
                              const text =
                                index + 1 === frameColors.length
                                  ? `${color}.`
                                  : `${color}, `;
                              return text;
                            })
                          : 'Unknown'}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.gridItem}>
                    <div>
                      <Typography component="h5" variant="h5" color="secondary">
                        {/* stolen */}
                        Stolen
                      </Typography>
                      <Typography component="p" variant="h6">
                        {/* stole date */}
                        {`${new Date(dateStolen * 1000).toDateString()}`}
                      </Typography>
                    </div>
                    <div>
                      <Typography component="h5" variant="h5" color="secondary">
                        {/* stolen location */}
                        Stolen Location
                      </Typography>
                      <Typography component="p" variant="h6">
                        {/* Stolen Location */}
                        {stolenLocation}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default Bike;

Bike.defaultProps = {
  bikeId: null,
  thumb: null,
  title: null,
  description: null,
  frameColors: [],
  dateStolen: null,
  stolenLocation: null,
};
Bike.propTypes = {
  handleDetails: PropTypes.func.isRequired,
  handleBikeId: PropTypes.func.isRequired,
  bikeId: PropTypes.number,
  thumb: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  frameColors: PropTypes.arrayOf(PropTypes.string),
  dateStolen: PropTypes.number,
  stolenLocation: PropTypes.string,
};
