import React from 'react'
import { StolenBikeCard } from '../StolenBikeCard'
import { TitleTotal, ContainerCards } from './styles'

export const StolenBikesList = ({ bikes, total = 'unknown' }) => (
  <>
    <TitleTotal>
      Total: <span>{total}</span>
    </TitleTotal>
    <ContainerCards>
      {bikes.map((bike) => (
        <StolenBikeCard key={bike.id} {...bike} />
      ))}
    </ContainerCards>
  </>
)
