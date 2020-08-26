import React, { useContext } from 'react'
import IncidentsContext from '../context/IncidentsContext'
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
import moment from 'moment'
import { Redirect, Link } from 'wouter'
import { IconButton, Typography } from '@material-ui/core'
import { Event, Room, Language } from '@material-ui/icons'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

export const Detail = ({ params }) => {
  const { incidents } = useContext(IncidentsContext)

  const incident = incidents.find((item) => item.id == params.id)

  if (typeof incident === 'undefined') {
    return <Redirect to='/' />
  }

  return (
    <>
      <Link to='/'>
        <IncidentAnchor>
          <IconButton aria-label='website'>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant='subtitle1' color='textSecondary'>
            Back
          </Typography>
        </IncidentAnchor>
      </Link>
      <IncidentContainer>
        <IncidentCard>
          <IncidentImage
            image={
              incident.media.image_url === null
                ? DEFAULT_IMAGE
                : incident.media.image_url
            }
          />
          <IncidentTextContainer>
            <IncidentTitle>{incident.title}</IncidentTitle>
            <IncidentText>
              {incident.description === null || incident.description === ''
                ? 'Not desription'
                : incident.description}
            </IncidentText>
            <IconButton aria-label='date'>
              <Event />
            </IconButton>
            {moment(incident.occurred_at).format('LLL')}
            <IconButton aria-label='location'>
              <Room />
            </IconButton>
            {incident.address}

            <a href={incident.source.html_url}>
              <IconButton aria-label='location'>
                <Language />
              </IconButton>
              {incident.address}
            </a>
          </IncidentTextContainer>
        </IncidentCard>
      </IncidentContainer>
    </>
  )
}
