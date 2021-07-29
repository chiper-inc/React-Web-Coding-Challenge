import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 20px;
    border: 2px solid black;
    height: 700px;
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

const List = () => {
  return (
        <MainContainer>
            <Filters>
                <Selectors>
                    <ByDateSelectors>
                        <Label for='start' >Stolen from</Label>
                        <DatePicker
                            selected={1627570800}
                            id='start'
                        />
                        <Label for='finish' >to</Label>
                        <DatePicker
                            selected={1627570800}
                            id='finish'
                        />
                    </ByDateSelectors>
                </Selectors>
                <SearchBar>
                    <SearchInput type='text' placeholder='Search...' />
                    <SearchButton>
                    </SearchButton>
                </SearchBar>
            </Filters>
        </MainContainer>
  )
}

export default List