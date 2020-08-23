/* eslint-disable camelcase */
import React from 'react'
import { getDateFromUnix } from '../../utils/DateParser'
import {
  Card,
  Img,
  Title,
  BoldText,
  Paragraph
} from './styles'
import { CardBody, Row, Col } from 'reactstrap'
import logoBike from './assets/bike.svg'

export const StolenBikeCard = ({
  title,
  description,
  address,
  occurred_at,
  updated_at,
  media: { image_url_thumb }
}) => (
  <Card>
    <CardBody>
      <Row>
        <Col md='auto' className='text-center'>
          <Img src={image_url_thumb || logoBike} alt='logo-police' />
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
  </Card>
)
