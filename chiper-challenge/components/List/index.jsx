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

const List = () => {
    const dispatch = useDispatch()
    const { cases } = useSelector((state) => ({ ...state }))
    const [startDate, setStartDate] = useState(new Date('01/01/2010'))
    const [finishDate, setFinishDate] = useState(new Date())
    const [actualPage, setActualPage] = useState(1)
    const [listCases, setListCases] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        dispatch(getCases())
    }, [])

    useEffect(() => {
        if (cases) {
            listHandler(actualPage)
        }
    }, [ cases, actualPage ])

    useEffect(() => {
        if (cases) {
            setTotalPages(Math.ceil(cases.length / 10))
        }
    }, [ cases ])

    function listHandler (actualPage) {
        let newCasesArr = []
        for (let i = 0; i < 10; i++) {
            if (cases[(actualPage * 10 - 10) + i]) {
                newCasesArr.push(cases[(actualPage * 10 - 10) + i])
            }
        }
        setListCases(newCasesArr)
    }

    function paginationButtonsHandler () {
        let buttons = []

        if (actualPage === 1) {
            buttons.push(<PaginationButtonDisabled onClick={() => setActualPage(1)} >First</PaginationButtonDisabled>)
            buttons.push(<PaginationButtonDisabled >Prev</PaginationButtonDisabled>)
        } else if (actualPage > 1) {
            buttons.push(<PaginationButton onClick={() => setActualPage(1)} >First</PaginationButton>)
            buttons.push(<PaginationButton onClick={() => setActualPage(actualPage - 1)} >Prev</PaginationButton>)
        }

        for (let i = 1; i <= totalPages; i++) {
            if (i ===  actualPage - 2) {
                buttons.push(<PaginationButton onClick={() => setActualPage(actualPage - 2)}>{actualPage - 2}</PaginationButton>)
            } else if (i ===  actualPage - 1) {
                buttons.push(<PaginationButton onClick={() => setActualPage(actualPage - 1)}>{actualPage - 1}</PaginationButton>)
            } else if (i ===  actualPage) {
                buttons.push(<PaginationButton>{actualPage}</PaginationButton>)
            } else if (i === (actualPage + 1)) {
                buttons.push(<PaginationButton onClick={() => setActualPage(actualPage + 1)} >{actualPage + 1}</PaginationButton>)
            } else if (i === actualPage + 2) {
                buttons.push(<PaginationButton onClick={() => setActualPage(actualPage + 2)} >{actualPage + 2}</PaginationButton>)
            }
        }

        if (actualPage === totalPages) {
            buttons.push(<PaginationButtonDisabled>Next</PaginationButtonDisabled>)
            buttons.push(<PaginationButtonDisabled>Last</PaginationButtonDisabled>)
        } else if (actualPage < totalPages) {
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
                    <SearchInput type='text' placeholder='Search...' />
                    <SearchButton>
                    </SearchButton>
                </SearchBar>
            </Filters>
            <ListContainer>
                {
                    listCases && listCases.map(element => (
                        <ListItem
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