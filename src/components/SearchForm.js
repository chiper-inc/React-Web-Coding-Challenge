import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import { WrapperTextField } from '../styles/SearchFormStyles'
import { useGetIncidents } from '../hooks/useGetIncidents'
import { useSearchForm } from '../hooks/useSearchForm'

export const SearchForm = ({ page }) => {
  const {
    keyword,
    dateFrom,
    dateTo,
    handleChangeKeyword,
    handleChangeDateFrom,
    handleChangeDateTo,
  } = useSearchForm()

  const { loading, handleClickSearch } = useGetIncidents({
    page: page,
    per_page: 10,
    keyword,
    dateTo,
    dateFrom,
  })

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6}>
        <WrapperTextField>
          <TextField
            label="Search case"
            defaultValue={keyword}
            fullWidth
            onChange={handleChangeKeyword}
          />
        </WrapperTextField>
      </Grid>
      <Grid item xs={6} sm={2}>
        <WrapperTextField>
          <TextField
            label="From"
            type="date"
            defaultValue={dateFrom}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            onChange={handleChangeDateFrom}
          />
        </WrapperTextField>
      </Grid>
      <Grid item xs={6} sm={2}>
        <WrapperTextField>
          <TextField
            label="To"
            type="date"
            defaultValue={dateTo}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            onChange={handleChangeDateTo}
          />
        </WrapperTextField>
      </Grid>
      <Grid item xs={6} sm={2}>
        <WrapperTextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickSearch}
            disabled={loading}
          >
            Find Cases
          </Button>
        </WrapperTextField>
      </Grid>
    </Grid>
  )
}
