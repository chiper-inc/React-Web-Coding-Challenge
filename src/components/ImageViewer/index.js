/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Modal, ModalHeader, ModalBody, Container, Col, Row } from 'reactstrap'
import { ROOT_PORTAL_ID } from '../../AppSettings'
import { Img, ContainerMap, TitleData, TextData } from './styles'
import LeaftMap from '../LeaftMap'
import { getDateFromUnix } from '../../utils/DateParser'

let leaftMap
const refAction = (element) => {
  if (element) {
    leaftMap = new LeaftMap(element, [52.4985969, 13.3783562])
    leaftMap.renderMap()

    return
  }
  leaftMap.DisposeElem()
}
export const ImageViewer = ({
  isOpen,
  onClose,
  src,
  alt,
  geoJsonStolenBikes,
  actions,
  title,
  description,
  address,
  occurred_at,
  updated_at
}) => {
  useEffect(() => {
    if (isOpen) {
      actions.requestGeoJsonByTitle(title)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && leaftMap) {
      leaftMap.renderGeoJson(geoJsonStolenBikes, true)
    }
  }, [geoJsonStolenBikes])

  if (!isOpen) return ''
  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} toggle={onClose} centered size='xl'>
      <ModalHeader toggle={onClose}>{title}</ModalHeader>
      <ModalBody>
        <Container fluid>
          <Row>
            <Col md={4}>
              <Img src={src} alt={alt} />
              <TitleData>Description</TitleData>
              <TextData>{description || 'No description'}</TextData>
              <TitleData>Address</TitleData>
              <TextData>{address}</TextData>
              <TitleData>Date stolen</TitleData>
              <TextData>{getDateFromUnix(occurred_at)}</TextData>
              <TitleData>Date reported</TitleData>
              <TextData>{getDateFromUnix(updated_at)}</TextData>
            </Col>
            <Col md={8}>
              <ContainerMap ref={refAction} />
            </Col>
          </Row>
        </Container>
      </ModalBody>
    </Modal>,
    document.getElementById(ROOT_PORTAL_ID)
  )
}
