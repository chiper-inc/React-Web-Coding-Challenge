import styled from "styled-components";

export const WrapperState = styled.div `
    display: flex;
    justify-content: center;
    margin: 5rem auto;
`

export const Spinner = styled.i `
    font-size: 36px;
    animation: animation-spinner 1.5s linear infinite;

    @keyframes animation-spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`