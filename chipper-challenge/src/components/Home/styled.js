import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 100%;
    margin-bottom: 15px;
    background-color: #152d35;
    background-size: cover;
    display: flex;
    flex-direction: column;
    grid-gap: 4em;
    justify-content: center;
    margin-bottom: 15px;
    align-items: center;
    font-family: 'Karla', sans-serif;

    .total-thefts {
        display: flex;
        flex-direction: flex-end;
        font-size: 2rem;
        color: #fff;
    }

    .card {
        display: flex;
        flex-direction: column;
        width: 80%;
        background-color: #f7f6f2;
        justify-content: center;
        height: 25rem;
        border: 0.2rem solid #fff;

        .description {
            font-size: 1.4rem;
            font-weight: 300;
            text-transform: initial;
        }

        .not-found {
            margin-right: 5px;
            font-size: 1.4rem;
            font-weight: 300;
        }

        img {
            height: 25rem;
            width: 30%;
            float: left;
            /* display: flex; */
        }

        .img {
            font-size: 1.4rem;
            text-align: center;
        }

        .info {
            text-transform: uppercase;
        }
        .date-direction {
            display: flex;
            justify-content: center;
            font-size: 1.4rem;
            h3 {
                margin-left: 5px;
                font-weight: 300;
            }
            .stolen {
                border-bottom: 0.2rem solid red;
                text-transform: uppercase;
                font-weight: 500;
            }
        }
    }
`;
