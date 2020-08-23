import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { ROOT_PORTAL_ID } from '../../AppSettings'
import { Img } from './styles'

export const ImageViewer = ({ isOpen, onClose, src, alt, title }) => {
  if (!isOpen) return ''

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} toggle={onClose} centered size='lg'>
      <ModalHeader toggle={onClose}>{title}</ModalHeader>
      <ModalBody>
        <Img src={src} alt={alt} />
      </ModalBody>
    </Modal>,
    document.getElementById(ROOT_PORTAL_ID)
  )
}
