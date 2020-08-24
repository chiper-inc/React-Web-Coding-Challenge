import React from 'react'
import { Title, SubTtitle } from './styles'
import { PageInfo } from '../PageInfo'
export const AlertError = ({ error }) => (
  <PageInfo>
    <Title>Ooops, :(</Title>
    <SubTtitle>{error}</SubTtitle>
  </PageInfo>
)
