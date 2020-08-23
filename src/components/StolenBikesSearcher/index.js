import React from 'react'
import { Input, Label, Button, Row, Col } from 'reactstrap'
import { FormGroup, Form } from './styles'

const TEXT_QUERY = 'textQuery'
const START_DATE = 'startDate'
const END_DATE = 'endDate'

const textRef = React.createRef()
const startDateRef = React.createRef()
const endDateRef = React.createRef()

export const StolenBikesSearcher = ({ onSubmit }) => {
  const handleSubmit = () => {
    const textQuery = textRef.current.value.trim()
    const startDate = startDateRef.current.value
    const endDate = endDateRef.current.value

    onSubmit({
      textQuery,
      startDate,
      endDate
    })
  }
  const handleClean = () => {
    textRef.current.value = ''
    startDateRef.current.value = ''
    endDateRef.current.value = ''
  }
  const handleEnter = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault()
      handleSubmit()
    }
  }
  return (
    <Form>
      <Row className='justify-content-md-center' form>
        <Col md={3} className='mb-1'>
          <FormGroup>
            <Input
              innerRef={textRef}
              placeholder='Search case descriptions'
              name={TEXT_QUERY}
              onKeyDown={handleEnter}
            />
          </FormGroup>
        </Col>
        <Col md={3} className='mb-1'>
          <FormGroup row>
            <Label for='startDate' md={2}>
              From
            </Label>
            <Col md={10}>
              <Input
                type='date'
                innerRef={startDateRef}
                name={START_DATE}
                id={START_DATE}
              />
            </Col>
          </FormGroup>
        </Col>
        <Col md={3} className='mb-1'>
          <FormGroup row>
            <Label for='endDate' md={2}>
              To
            </Label>
            <Col md={10}>
              <Input
                type='date'
                innerRef={endDateRef}
                name={END_DATE}
                id={END_DATE}
              />
            </Col>
          </FormGroup>
        </Col>
        <Col md='auto' className='mb-1 text-center'>
          <Button color='secondary mr-1' onClick={handleClean}>
            Clean Filters
          </Button>
          <Button color='primary' onClick={handleSubmit}>
            Find cases
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
