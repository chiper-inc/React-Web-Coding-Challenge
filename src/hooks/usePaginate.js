import { useState } from 'react'

export const usePaginate = () => {
  const [page, setPage] = useState(1)

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  return {
    page,
    handleChangePage,
  }
}
