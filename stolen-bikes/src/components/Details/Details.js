import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import bikeImg from '../../assets/img/bike.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    width: '100%',
    height: '100%',
  },
  card: {
    width: '90vw',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15,
  },
  gridItem: {
    display: 'flex',
    alignItems: 'flex-start',
    width: 'auto',
    gap: 15,
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  container: {
    display: 'flex',
  },
  media: {
    width: '97%',
    height: '80vh',
    margin: 15,
    borderRadius: 10,
  },
  content: {
    flex: '1 0 auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  gridContainer: {
    height: '100%',
    width: '100%',
  },
  detail: {
    marginBottom: 10,
  },
}));

const Details = ({ handleDetails }) => {
  const classes = useStyles();
  const bikeById = useSelector((state) => state.bikes.bikeById);
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container className={classes.header}>
            <Grid item xs={12} className={classes.gridItem}>
              <IconButton
                className={classes.icon}
                onClick={() => handleDetails()}
              >
                <ArrowBackIcon fontSize="large" />
              </IconButton>
              <Typography component="h4" variant="h3" color="primary">
                {/* title */}
                {bikeById.title}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography component="p" variant="h6">
                {/* description */}
                {bikeById.description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <div className={classes.container}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} sm={8} className={classes.gridItem}>
              <CardMedia
                className={classes.media}
                image={bikeById.large_img || bikeImg}
                title="Contemplative Reptile"
              />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.gridItem}>
              <CardContent className={classes.content}>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* frame model */}
                    Frame Model
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* frame model */}
                    {bikeById.frame_model}
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* Color */}
                    Color
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* Color */}
                    {bikeById.frame_colors
                      ? bikeById.frame_colors.map((color, index) => {
                          const text =
                            index + 1 === bikeById.frame_colors.length
                              ? `${color}.`
                              : `${color}, `;
                          return text;
                        })
                      : 'Unknown'}
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* manufacturer */}
                    Manufacturer
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* manufacturer name */}
                    {bikeById.manufacturer_name}
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* serial */}
                    Serial Number
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* serial number */}
                    {bikeById.serial}
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* year */}
                    Year
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* year */}
                    {bikeById.year ? bikeById.year : 'Unkown'}
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="secondary">
                    {/* stolen */}
                    Stolen
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* stole date */}
                    {`${new Date(bikeById.date_stolen * 1000).toDateString()}`}
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="secondary">
                    {/* stolen location */}
                    Stolen Location
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* Stolen Location */}
                    {bikeById.stolen_location}
                  </Typography>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default Details;

Details.propTypes = {
  handleDetails: PropTypes.func.isRequired,
};
