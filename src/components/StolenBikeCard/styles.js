import styled from 'styled-components/macro'
import { Card as CardB } from 'reactstrap'

export const Card = styled(CardB)`
  box-shadow: rgba(55, 55, 55, 0.3) 7px 7px 3px 0px;
  border: 1px solid rgba(55, 55, 55, 0.25);
  margin-bottom: 0.5rem;
`
export const Img = styled.img`
  border: 1px solid rgba(70, 70, 70, 0.25);
  border-radius: 0.25rem;
  height: 150px;
  width: 150px;
  cursor:pointer;
`
export const Title = styled.h5`
  text-decoration: underline;
  cursor: default;
`
export const Paragraph = styled.p`
  margin-bottom: 0.5rem;
  cursor: default;
`

export const BoldText = styled.span`
  font-weight: bold;
`
