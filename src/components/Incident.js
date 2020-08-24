import React from 'react'
import moment from 'moment'
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
import { Link } from 'wouter'

export const Incident = ({
  id,
  title,
  description,
  occurred_at,
  address,
  media,
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
          <IncidentText>
            {moment(occurred_at).format('LLL')} - {address}{' '}
          </IncidentText>
          <Link to={`/detail/${id}`}>
            <IncidentAnchor>View Detail</IncidentAnchor>
          </Link>
        </IncidentTextContainer>
      </IncidentCard>
    </IncidentContainer>
  )
}
