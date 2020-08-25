import styled from 'styled-components'
import {
  FormGroup as FormGroupB,
  Form as FormB,
  NavbarToggler as NavbarTogglerB,
  InputGroup as InputGroupB,
  Button as ButtonB
} from 'reactstrap'

export const FormGroup = styled(FormGroupB)`
  margin-right: 0.5rem;
  margin-bottom: 0;
  text-align: center;
  justify-content: center;
`

export const Form = styled(FormB)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const NavbarToggler = styled(NavbarTogglerB)`
  color: #007bff;
  border-color: #007bff !important;
  width: 100%;
  padding: 0.5 rem 0;
  :focus {
    border-color: #0062cc;
    outline-color: white;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
`
export const TextButton = styled.div`
  color: #007bff;
  border-color: #007bff;
  font-size: 1rem;
  :focus {
    border: 0;
  }
`
export const InputGroup = styled(InputGroupB)`
  width: 100% !important;
`
export const Button = styled(ButtonB)`
  width: 115px;
`
