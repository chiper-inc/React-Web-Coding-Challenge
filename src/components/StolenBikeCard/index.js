/* eslint-disable camelcase */
import React, { useState } from 'react'
import { getDateFromUnix } from '../../utils/DateParser'
import { Card, Img, Title, BoldText, Paragraph } from './styles'
import { CardBody, Row, Col } from 'reactstrap'
import logoBike from './assets/bike.svg'
import { ImageViewer } from '../ImageViewer'

export const StolenBikeCard = ({
  title,
  description,
  address,
  occurred_at,
  updated_at,
  media: { image_url_thumb, image_url }
}) => {
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const handleToggleViewer = () => {
    console.log(viewerIsOpen)
    setViewerIsOpen(!viewerIsOpen)
  }
  return (
    <Card>
      <CardBody>
        <Row>
          <Col md='auto' className='text-center'>
            <Img
              onClick={handleToggleViewer}
              src={image_url_thumb || logoBike}
              alt='thumb-bike-image'
            />
          </Col>
          <Col md>
            <Title>{title}</Title>
            <Paragraph>{description || 'No description'}</Paragraph>
            <Paragraph>
              <BoldText>Reported</BoldText> {getDateFromUnix(updated_at)}
            </Paragraph>
            <Paragraph>
              <BoldText>Stolen</BoldText>{' '}
              {`${getDateFromUnix(occurred_at)} - ${address}`}
            </Paragraph>
          </Col>
        </Row>
      </CardBody>
      <ImageViewer
        isOpen={viewerIsOpen}
        onClose={handleToggleViewer}
        src={image_url || logoBike}
        alt='bike-image'
        title={title}
      />
    </Card>
  )
}
