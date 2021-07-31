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
    width: 90%;
    margin: 20px;
    min-height: 500px;
`
const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 5px;
    background-color: #c7c7c7;
    border-radius: 5px;
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
    width: 20%;
    height: 36px;
    border-radius: 8px;,
    overflow: hidden;
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
`
const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const FirstPrevButton = styled.button`
    border: none;
    heigth: 35px;
    width: 35px;
    background-color: #191919;
    color: white;
    border-radius: 50%;
    padding: 10px;
    margin: 4px;
    cursor: pointer;
`
const PaginationButton = styled.button`
    border: none;
    heigth: 35px;
    width: 35px;
    background-color: #191919;
    color: white;
    border-radius: 20%;
    padding: 10px;
    margin: 4px;
    cursor: pointer;
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
`
const TotalCases = styled.span`
    color: gray;
    margin-left: 15px;
    font-size: 18px;
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
      buttons.push(<FirstPrevButton onClick={() => setActualPage(1)} >{'<<'}</FirstPrevButton>)
      buttons.push(<FirstPrevButton onClick={() => setActualPage(actualPage - 1)} >{'<'}</FirstPrevButton>)
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
      buttons.push(<FirstPrevButton onClick={() => setActualPage(actualPage + 1)}>{'>'}</FirstPrevButton>)
      buttons.push(<FirstPrevButton onClick={() => setActualPage(totalPages)}>{'>>'}</FirstPrevButton>)
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