import React from 'react'
import { InputGroupAddon, Input } from 'reactstrap'
import { InputGroup, FormGroup } from './styles'

export const InputForm = ({
  addonText,
  innerRef,
  placeholder = '',
  name,
  type = 'text',
  onKeyDown = () => ''
}) => (
  <FormGroup className='mb-2 mr-0 col-md-3'>
    <InputGroup>
      {addonText && (
        <InputGroupAddon addonType='prepend'>{addonText}</InputGroupAddon>
      )}
      <Input
        innerRef={innerRef}
        placeholder={placeholder}
        name={name}
        id={name}
        type={type}
        onKeyDown={onKeyDown}
      />
    </InputGroup>
  </FormGroup>
)
