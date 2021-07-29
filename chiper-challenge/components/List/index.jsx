import React, { useEffect } from 'react'
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

const List = () => {
    const dispatch = useDispatch()
    const { cases, totalCases } = useSelector((state) => ({ ...state }))

    useEffect(() => {
        dispatch(getCases())
    }, [])

    console.log(cases)

    return (
        <MainContainer>
            <Filters>
                <Selectors>
                    <ByDateSelectors>
                        <Label>Stolen from</Label>
                        <DatePicker
                            selected={1627570800}
                        />
                        <Label>to</Label>
                        <DatePicker
                            selected={1627570800}
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
                    cases && cases.map(element => (
                            <ListItem
                                image={element.large_img}
                                title={element.title}
                                colors={element.frame_colors}
                                description={element.description}
                                dateStolen={element.date_stolen}
                                location={element.solen_location}
                            />
                    ))
                }
            </ListContainer>
        </MainContainer>
    )
}

export default List