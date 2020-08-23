import React from 'react'
import { Pagination } from '@material-ui/lab'

export const Paginate = ({ currentPage, count, handleChangePage }) => {
  return (
    <Pagination count={count} page={currentPage} onChange={handleChangePage} />
  )
}
