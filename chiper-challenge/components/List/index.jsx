import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCases } from '../../actions'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-datepicker/dist/react-datepicker.css'
import ListItem from './ListItem'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 1.2rem;
    min-height: 35rem;
`
const Filters = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    margin: 10px 2.5%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      border: none;
    }
    
`
const ByDateSelectors = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1024px) {
      margin: .6rem;
    }
    @media (max-width: 481px) {
      flex-direction: column;
      width: 100%;
    }
    
`
const Label = styled.label`
    font-size: 1.5rem;
    margin: 0 10px;
    @media (max-width: 720px) {
      font-size: 1.2rem;
      margin: 0 5px;
    }
    @media (max-width: 481px) {
      font-size: 1.5rem
    }
`
const DateSelector = styled(props => <DatePicker {...props} />)`
    border: none;
    margin: none;
    padding: 8px;
    text-align: center;
    font-weight: 500;
    outline: none;
    border-bottom: 1px solid #c7c7c7;
    width: 100px;
    @media (max-width: 481px) {
      font-size: 1.2rem;
      width: 100%;
    }
`
const SearchBar = styled.div`
    display: flex;
    width: 20%;
    height: 36px;
    border: 1px solid #c7c7c7;
    border-radius: 5px;
    overflow: hidden;
    @media (max-width: 1024px) {
      width: 35%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
`
const SearchInput = styled.input`
    border: none;
    outline: none;
    padding: 15px;
    width: 100%;
    border-radius: 8px;
`
const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-height: 30rem;
`
const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const FirstPrevButton = styled.button`
    border: none;
    height: 35px;
    width: 35px;
    background-color: #191919;
    color: white;
    border-radius: 50%;
    padding: 10px;
    margin: 4px;
    cursor: pointer;
    visibility: ${props => props.visibilityState || 'auto'};
    @media (max-width: 481px) {
      height: 25px;
      width: 25px;
      padding: 3px;
    }
`
const PaginationButton = styled.button`
    border: none;
    height: 35px;
    width: 35px;
    background-color: #191919;
    color: white;
    border-radius: 20%;
    padding: 10px;
    margin: 4px;
    cursor: pointer;
    visibility: ${props => props.visibilityState || 'visible'};
      @media (max-width: 481px) {
        height: 25px;
        width: 25px;
        padding: 3px;
      }
`
const PaginationButtonDisabled = styled.button`
    border: none;
    heigth: 35px;   
    width: 35px;
    background-color: #c7c7c7;
    color: #191919;
    border-radius: 20%;
    padding: 10px;
    margin: 4px;
    @media (max-width: 481px) {
      height: 25px;
      width: 25px;
      padding: 3px;
    }
`
const TotalCases = styled.span`
    color: gray;
    text-align: left;
    width: 90%;
    margin: 0 5%;
    font-size: 1rem;
`
const NoResults = styled.span`
    font-size: 1.5rem;
`
const Error = styled.span`
    font-size: 1.5rem;
    color: red;
`

const List = () => {
  const dispatch = useDispatch()
  const { cases, error } = useSelector((state) => ({ ...state }))
  const [filteredCases, setFilteredCases] = useState([])
  const [startDate, setStartDate] = useState(new Date('01-26-2014'))
  const [finishDate, setFinishDate] = useState(new Date())
  const [actualPage, setActualPage] = useState(1)
  const [listCases, setListCases] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [searched, setSearched] = useState('')
  const [loading, setLoading] = useState(true)
  const [APIError, setAPIError] = useState(false)

  useEffect(() => {
    dispatch(getCases())
  }, [])

  useEffect(() => {
    if (filteredCases) {
      listHandler(actualPage)
      setTimeout(function () { setLoading(false) }, 1000)
    }
  }, [filteredCases, actualPage])

  useEffect(() => {
    if (cases) {
      filterCases(searched)
    }
  }, [cases, startDate, finishDate, searched])

  useEffect(() => {
    if (filteredCases) {
      setTotalPages(Math.ceil(filteredCases.length / 10))
    }
  }, [filteredCases])

  useEffect(() => {
    if (error) {
      setAPIError(true)
    }
  }, [error])

  const handleSearch = (onSearch) => {
    setSearched(onSearch)
  }

  const filterCases = () => {
    if (searched) {
      setFilteredCases(cases.filter(element => element.date_stolen < toTimestamp(finishDate) && element.date_stolen > toTimestamp(startDate) && element.title.toLowerCase().indexOf(searched.toLowerCase()) !== -1))
    } else {
      setFilteredCases(cases.filter(element => element.date_stolen < toTimestamp(finishDate) && element.date_stolen > toTimestamp(startDate)))
    }
    setActualPage(1)
  }

  const listHandler = (actualPage) => {
    const newCasesArr = []
    for (let i = 0; i < 10; i++) {
      if (filteredCases[(actualPage * 10 - 10) + i]) {
        newCasesArr.push(filteredCases[(actualPage * 10 - 10) + i])
      }
    }
    setListCases(newCasesArr)
  }

  const toTimestamp = (strDate) => {
    const dateNum = Date.parse(strDate)
    return dateNum / 1000
  }

  const paginationButtonsHandler = () => {
    const buttons = []

    if (actualPage > 1) {
      buttons.push(<FirstPrevButton key='first' onClick={() => setActualPage(1)} >{'<<'}</FirstPrevButton>)
      buttons.push(<FirstPrevButton key='prev' onClick={() => setActualPage(actualPage - 1)} >{'<'}</FirstPrevButton>)
    }
    if (actualPage === 1) {
      buttons.push(<FirstPrevButton key='first' visibilityState='hidden' onClick={() => setActualPage(1)} >{'<<'}</FirstPrevButton>)
      buttons.push(<FirstPrevButton key='prev' visibilityState='hidden' onClick={() => setActualPage(actualPage - 1)} >{'<'}</FirstPrevButton>)
    }

    if (actualPage > 2) {
      buttons.push(<PaginationButton key={actualPage - 2} onClick={() => setActualPage(actualPage - 2)}>{actualPage - 2}</PaginationButton>)
    } else {
      buttons.push(<PaginationButton key={actualPage - 2} visibilityState='hidden' onClick={() => setActualPage(actualPage - 2)}>{actualPage - 2}</PaginationButton>)
    }

    if (actualPage > 1) {
      buttons.push(<PaginationButton key={actualPage - 1} onClick={() => setActualPage(actualPage - 1)}>{actualPage - 1}</PaginationButton>)
    } else {
      buttons.push(<PaginationButton key={actualPage - 1} visibilityState='hidden' onClick={() => setActualPage(actualPage - 1)}>{actualPage - 1}</PaginationButton>)
    }

    buttons.push(<PaginationButtonDisabled key='actual' >{actualPage}</PaginationButtonDisabled>)

    if (actualPage < totalPages) {
      buttons.push(<PaginationButton key={actualPage + 1} onClick={() => setActualPage(actualPage + 1)} >{actualPage + 1}</PaginationButton>)
    } else {
      buttons.push(<PaginationButton key={actualPage + 1} visibilityState='hidden' onClick={() => setActualPage(actualPage + 1)} >{actualPage + 1}</PaginationButton>)
    }

    if (actualPage < totalPages - 1) {
      buttons.push(<PaginationButton key={actualPage + 2} onClick={() => setActualPage(actualPage + 2)} >{actualPage + 2}</PaginationButton>)
    } else {
      buttons.push(<PaginationButton key={actualPage + 2} visibilityState='hidden' onClick={() => setActualPage(actualPage + 2)} >{actualPage + 2}</PaginationButton>)
    }

    if (actualPage < totalPages) {
      buttons.push(<FirstPrevButton key='next' onClick={() => setActualPage(actualPage + 1)}>{'>'}</FirstPrevButton>)
      buttons.push(<FirstPrevButton key='last' onClick={() => setActualPage(totalPages)}>{'>>'}</FirstPrevButton>)
    } else {
      buttons.push(<FirstPrevButton key='next' visibilityState='hidden' onClick={() => setActualPage(actualPage + 1)}>{'>'}</FirstPrevButton>)
      buttons.push(<FirstPrevButton key='last' visibilityState='hidden' onClick={() => setActualPage(totalPages)}>{'>>'}</FirstPrevButton>)
    }

    return buttons
  }

  return (
    <MainContainer>
      <Filters>
        <ByDateSelectors>
          <Label>Stolen from</Label>
          <DateSelector
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <Label>to</Label>
          <DateSelector
            selected={finishDate}
            onChange={(date) => setFinishDate(date)}
          />
        </ByDateSelectors>
        <SearchBar>
          <SearchInput type='text' placeholder='Search...' value={searched} onChange={(e) => handleSearch(e.target.value)} />
        </SearchBar>
      </Filters>
      <TotalCases>{`Total Cases Found: ${filteredCases.length}`}</TotalCases>
      <ListContainer>
        {
          loading
            ? <Loader type="TailSpin" color='#c7c7c7' />
            : APIError
              ? <Error>{error}</Error>
              : listCases.length
                ? listCases.map((element, index) => (
                  <ListItem
                    key={index}
                    id={element.id}
                    image={element.large_img}
                    title={element.title}
                    colors={element.frame_colors}
                    description={element.description}
                    dateStolen={element.date_stolen}
                    location={element.stolen_location}
                  />
                ))
                : <NoResults>Oops, no results, try searching for something different.</NoResults>
        }
      </ListContainer>
      <Pagination>
        {
          paginationButtonsHandler()
        }
      </Pagination>
    </MainContainer>
  )
}

export default List