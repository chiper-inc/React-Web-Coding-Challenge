import React, { Fragment, useContext } from 'react'
import IncidentsContext from '../context/IncidentsContext'
import {
  IncidentContainer,
  IncidentCard,
  IncidentImage,
  IncidentTextContainer,
  IncidentTitle,
  IncidentText,
  IncidentAnchor,
} from '../styles/IncidentStyles'
import DEFAULT_IMAGE from '../assets/image/default-image.png'
import moment from 'moment'
import { Redirect, Link } from 'wouter'

export const Detail = ({ params }) => {
  const { incidents } = useContext(IncidentsContext)

  const incident = incidents.find((item) => item.id == params.id)

  if (typeof incident === 'undefined') {
    return <Redirect to="/" />
  }

  return (
    <Fragment>
      <Link to={`/`}>
        <IncidentAnchor>Back</IncidentAnchor>
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
            <IncidentText>
              {moment(incident.occurred_at).format('LLL')} - {incident.address}{' '}
            </IncidentText>
          </IncidentTextContainer>
        </IncidentCard>
      </IncidentContainer>
    </Fragment>
  )
}
