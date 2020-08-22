import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export const SearchForm = () => {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <TextField label="Search case descriptions" defaultValue="" />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>Date init</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>Date end</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <button>Find Cases</button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
