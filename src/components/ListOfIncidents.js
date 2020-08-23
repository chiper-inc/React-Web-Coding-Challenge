import React, { Fragment } from 'react'
import { Incident } from './Incident'

export const ListOfIncidents = ({ incidents }) => {
  return (
    <Fragment>
      {incidents.map(
        ({ id, title, description, occurred_at, address, media }) => (
          <Incident
            key={id}
            id={id}
            title={title}
            description={description}
            occurred_at={occurred_at}
            address={address}
            media={media}
          />
        )
      )}
    </Fragment>
  )
}
