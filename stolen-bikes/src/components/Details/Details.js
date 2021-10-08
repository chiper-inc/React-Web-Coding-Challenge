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
    // height: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15,
  },
  gridItem: {
    display: 'flex',
    // justifyContent: 'space-between',
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
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container className={classes.header}>
            <Grid item className={classes.gridItem}>
              <IconButton
                className={classes.icon}
                onClick={() => handleDetails()}
              >
                <ArrowBackIcon fontSize="large" />
              </IconButton>
              <Typography component="h4" variant="h3" color="primary">
                {/* title */}
                2020 Kona Rove
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography component="p" variant="h6">
                {/* description */}
                With bike rack and fenders
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <div className={classes.container}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} sm={8} className={classes.gridItem}>
              <CardMedia
                className={classes.media}
                image="https://files.bikeindex.org/uploads/Pu/488295/large_2020_Feb_Kona_Rove__1_.JPG"
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
                    Rove
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* Color */}
                    Color
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* Color */}
                    Teal
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* manufacturer */}
                    Manufacturer
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* manufacturer name */}
                    Kona
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* serial */}
                    Serial Number
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* serial number */}
                    AK90507460
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="primary">
                    {/* year */}
                    Year
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* year */}
                    2020
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="secondary">
                    {/* stolen */}
                    Stolen
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* stole date */}
                    Jun 27th, 6am
                  </Typography>
                </div>
                <div className={classes.detail}>
                  <Typography component="h4" variant="h4" color="secondary">
                    {/* stolen location */}
                    Stolen Location
                  </Typography>
                  <Typography component="p" variant="h6">
                    {/* Stolen Location */}
                    Hyattsville, MD - US
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
