import React from 'react'
import { StolenBikesSearcher } from '../StolenBikesSearcher'
import { StolenBikesList } from '../StolenBikesList'
import { StolenBikesPagination } from '../StolenBikesPagination'
import { OrbitalSpinner } from '../Loading'
import { AlertError } from '../Error'
import { Container, Header, Body, Footer } from './styles'

const getBikes = (bikes, page, length) => {
  const indexFirst = (page - 1) * length
  const indexLast = indexFirst + length

  return bikes.slice(indexFirst, indexLast)
}
const getTotalPages = (bikes, length) => Math.ceil(bikes.length / length)

export const StolenBikesContainer = ({
  bikes,
  loading,
  error,
  page,
  lengthPage,
  total,
  onChangePage,
  onSearch
}) => {
  let body
  let footer

  if (error) {
    body = <AlertError error={error} />
  } else if (loading) {
    body = <OrbitalSpinner />
  } else {
    const bikes2Show = getBikes(bikes, page, lengthPage)

    if (bikes2Show.length < 1) {
      body = 'No results!'
    } else {
      body = <StolenBikesList bikes={bikes2Show} total={total} />
      footer = (
        <StolenBikesPagination
          onChangePage={onChangePage}
          page={page}
          totalPages={getTotalPages(bikes, lengthPage)}
        />
      )
    }
  }

  return (
    <Container id='stolen-bikes-page'>
      <Header>
        <StolenBikesSearcher onSubmit={onSearch} />
      </Header>
      <Body>{body}</Body>
      <Footer>{footer}</Footer>
    </Container>
  )
}
