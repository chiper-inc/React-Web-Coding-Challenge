import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCases } from '../../actions'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ListItem from './ListItem'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 20px;
    border: 2px solid black;
    mi-height: 500px;
    background-color: gray;
`
const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`
const Selectors = styled.div`
    display: flex;
    justify-content: space-between;
`
const ByDateSelectors = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Label = styled.label`
    font-size: 30px;
    margin-right: 10px;
    margin-left: 10px;
`
const SearchBar = styled.div`
    display: flex;
    width: 30%;
    height: 50px;
    border-radius: 8px;,
    overflow: hidden;
    border: 2px solid black;
`
const SearchInput = styled.input`
    border: none;
    outline: none;
    padding: 20px;
    width: 80%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`
const SearchButton = styled.button`
    height: 100%;
    border: none;
    width: 20%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PaginationButton = styled.button`

`
const PaginationButtonDisabled = styled.button`

`
const TotalCases = styled.span`

`

const List = () => {
  const dispatch = useDispatch()
  const { cases } = useSelector((state) => ({ ...state }))
  const [filteredCases, setFilteredCases] = useState([])
  const [startDate, setStartDate] = useState(new Date('01-26-2014'))
  const [finishDate, setFinishDate] = useState(new Date())
  const [actualPage, setActualPage] = useState(1)
  const [listCases, setListCases] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [searched, setSearched] = useState('')

  useEffect(() => {
    dispatch(getCases())
  }, [])

  useEffect(() => {
    if (filteredCases) {
      listHandler(actualPage)
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

  function handleSearch (onSearch) {
    setSearched(onSearch)
  }

  function filterCases () {
    if (searched) {
      setFilteredCases(cases.filter(element => element.date_stolen < toTimestamp(finishDate) && element.date_stolen > toTimestamp(startDate) && element.title.toLowerCase().indexOf(searched.toLowerCase()) !== -1))
    } else {
      setFilteredCases(cases.filter(element => element.date_stolen < toTimestamp(finishDate) && element.date_stolen > toTimestamp(startDate)))
    }
    setActualPage(1)
  }

  function listHandler (actualPage) {
    const newCasesArr = []
    for (let i = 0; i < 10; i++) {
      if (filteredCases[(actualPage * 10 - 10) + i]) {
        newCasesArr.push(filteredCases[(actualPage * 10 - 10) + i])
      }
    }
    setListCases(newCasesArr)
  }

  function toTimestamp (strDate) {
    const dateNum = Date.parse(strDate)
    return dateNum / 1000
  }

  function paginationButtonsHandler () {
    const buttons = []

    if (actualPage > 1) {
      buttons.push(<PaginationButton onClick={() => setActualPage(1)} >First</PaginationButton>)
      buttons.push(<PaginationButton onClick={() => setActualPage(actualPage - 1)} >Prev</PaginationButton>)
    }

    for (let i = 1; i <= totalPages; i++) {
      if (i === actualPage - 2) {
        buttons.push(<PaginationButton onClick={() => setActualPage(actualPage - 2)}>{actualPage - 2}</PaginationButton>)
      } else if (i === actualPage - 1) {
        buttons.push(<PaginationButton onClick={() => setActualPage(actualPage - 1)}>{actualPage - 1}</PaginationButton>)
      } else if (i === actualPage) {
        buttons.push(<PaginationButtonDisabled>{actualPage}</PaginationButtonDisabled>)
      } else if (i === (actualPage + 1)) {
        buttons.push(<PaginationButton onClick={() => setActualPage(actualPage + 1)} >{actualPage + 1}</PaginationButton>)
      } else if (i === actualPage + 2) {
        buttons.push(<PaginationButton onClick={() => setActualPage(actualPage + 2)} >{actualPage + 2}</PaginationButton>)
      }
    }

    if (actualPage < totalPages) {
      buttons.push(<PaginationButton onClick={() => setActualPage(actualPage + 1)}>Next</PaginationButton>)
      buttons.push(<PaginationButton onClick={() => setActualPage(totalPages)}>Last</PaginationButton>)
    }

    return buttons
  }

  return (
        <MainContainer>
            <Filters>
                <Selectors>
                    <ByDateSelectors>
                        <Label>Stolen from</Label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                        <Label>to</Label>
                        <DatePicker
                            selected={finishDate}
                            onChange={(date) => setFinishDate(date)}
                        />
                    </ByDateSelectors>
                </Selectors>
                <SearchBar>
                    <SearchInput type='text' placeholder='Search...' value={searched} onChange={(e) => handleSearch(e.target.value)} />
                    <SearchButton>
                    </SearchButton>
                </SearchBar>
            </Filters>
            <TotalCases>{`Total Cases Found: ${filteredCases.length}`}</TotalCases>
            <ListContainer>
                {
                    listCases && listCases.map((element, index) => (
                        <ListItem
                            key={index}
                            image={element.large_img}
                            title={element.title}
                            colors={element.frame_colors}
                            description={element.description}
                            dateStolen={element.date_stolen}
                            location={element.stolen_location}
                        />
                    ))
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