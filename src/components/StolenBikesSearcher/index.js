import React, { useState } from 'react'
import { Navbar, Collapse } from 'reactstrap'
import { InputForm } from './InputForm'
import { Button, FormGroup, Form, TextButton, NavbarToggler } from './styles'

const TEXT_QUERY = 'textQuery'
const START_DATE = 'startDate'
const END_DATE = 'endDate'

const textRef = React.createRef()
const startDateRef = React.createRef()
const endDateRef = React.createRef()

export const StolenBikesSearcher = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

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
    <Navbar light expand='md' className='justify-content-center'>
      <NavbarToggler onClick={handleToggle}>
        <TextButton>Filters</TextButton>
      </NavbarToggler>
      <Collapse isOpen={isOpen} className='justify-content-center' navbar>
        <Form inline className='w-100'>
          <InputForm
            innerRef={textRef}
            placeholder='Search case descriptions'
            name={TEXT_QUERY}
            onKeyDown={handleEnter}
          />
          <InputForm
            type='date'
            innerRef={startDateRef}
            name={START_DATE}
            addonText='From'
          />
          <InputForm
            type='date'
            innerRef={endDateRef}
            name={END_DATE}
            addonText='To'
          />
          <FormGroup className='mr-0 col-md-auto'>
            <Button
              color='secondary'
              className='mb-2 mr-2'
              onClick={handleClean}
            >
              Clean Filters
            </Button>
            <Button
              color='primary'
              className='mb-2 mr-2'
              onClick={handleSubmit}
            >
              Find cases
            </Button>
          </FormGroup>
        </Form>
      </Collapse>
    </Navbar>
  )
}
