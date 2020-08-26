import React from 'react'
import moment from 'moment'
import {
  IncidentContainer,
  IncidentCard,
  IncidentImage,
  IncidentTextContainer,
  IncidentTitle,
  IncidentText,
  IncidentAnchor
} from '../styles/IncidentStyles'
import DEFAULT_IMAGE from '../assets/image/default-image.png'
import { Link } from 'wouter'
import { IconButton, Typography } from '@material-ui/core'
import { Event, Room, Visibility } from '@material-ui/icons'

export const Incident = ({
  id,
  title,
  description,
  occurred_at,
  address,
  media
}) => {
  return (
    <IncidentContainer>
      <IncidentCard>
        <IncidentImage
          image={media.image_url === null ? DEFAULT_IMAGE : media.image_url}
        />
        <IncidentTextContainer>
          <IncidentTitle>{title}</IncidentTitle>
          <IncidentText>
            {description === null || description === ''
              ? 'Not desription'
              : description}
          </IncidentText>
          <IconButton aria-label='date'>
            <Event />
          </IconButton>
          {moment(occurred_at).format('LLL')}
          <IconButton aria-label='location'>
            <Room />
          </IconButton>
          {address}
          <Link to={`/detail/${id}`}>
            <IncidentAnchor>
              <IconButton aria-label='view'>
                <Visibility />
              </IconButton>
              <Typography variant='subtitle1' color='textSecondary'>
                View Detail
              </Typography>
            </IncidentAnchor>
          </Link>
        </IncidentTextContainer>
      </IncidentCard>
    </IncidentContainer>
  )
}
