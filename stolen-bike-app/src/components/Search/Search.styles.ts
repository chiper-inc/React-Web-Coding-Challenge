import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    margin: 1rem 0;
`

export const Input = styled.input `
    border: 1px solid var(--gray-light);
    padding: .6rem;
    border-radius: .5rem;
`

export const Button = styled.button `
    padding: .5rem;
    background-color: var(--dark);
    color: white;
    border: .1rem solid var(--dark);
    border-radius: .5rem;
    margin: 0 1rem;
    cursor: pointer;

    &:active {
        background-color: #212529ab;
    }

    & i {
        margin-right: .3rem;
    }
`

export const Total = styled.span `
    font-weight: bold;
    margin-left: auto;
`