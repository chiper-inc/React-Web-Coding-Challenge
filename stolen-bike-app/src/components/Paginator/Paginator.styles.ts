import styled from "styled-components";

export const WrapperPaginator = styled.div `
    display: flex;
    justify-content: center;
    margin: 3rem 0 1rem 0;
`

export const Button = styled.button `
    padding: 1rem;
    background-color: var(--dark);
    color: white;
    border: .1rem solid var(--dark);
    border-radius: .5rem;
    margin: 0 1rem;
    cursor: pointer;

    &:active {
        background-color: #212529ab;
    }
`