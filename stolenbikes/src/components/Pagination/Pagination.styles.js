import styled from 'styled-components'

export const PaginateContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const Button = styled.button`
  margin: 0 10px;
  cursor: pointer;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  list-style:none;

  &:hover {
    background-color: lightgrey;
  }
  &:disabled:hover {
    background-color: #FAFAFA;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`
export const Pages = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    width:50%;

    @media only screen and (max-width: 768px) {
        justify-content: space-between;
  }
`