import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import moment from 'moment'
import { IncidentStyles } from '../styles/IncidentStyles'
import DEFAULT_IMAGE from '../assets/image/default-image.png'

export const Incident = ({
  id,
  title,
  description,
  occurred_at,
  address,
  media,
}) => {
  const classes = IncidentStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={media.image_url === null ? DEFAULT_IMAGE : media.image_url}
        title={title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description === null || description === ''
              ? 'Not desription'
              : `${description.substring(0, 100)}...`}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Typography variant="subtitle1" color="textSecondary">
            {moment(occurred_at).format('LLL')} - {address}
          </Typography>
        </div>
      </div>
    </Card>
  )
}
