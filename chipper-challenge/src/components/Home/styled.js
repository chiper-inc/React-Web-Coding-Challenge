import styled from 'styled-components';

export const StyledDiv = styled.div`
    box-sizing: content-cover;
    background: #93b5c6;
    background-size: cover;
    font-family: 'Karla', sans-serif;

    .container-cards {
        display: flex;
        flex-direction: column;
        grid-gap: 4em;
        justify-content: center;
        align-items: center;
        .pagination ul {
            display: flex;
            justify-content: space-around;
            text-decoration: none;
            list-style-type: none;
        }
        li {
            text-decoration: none;
            /* border: 1px solid white; */
            border-radius: 8px;
            background-color: #c9ccd5;
            padding: 12px;
            width: 30px;
            text-align: center;
            margin-right: 5px;
        }
        a {
            text-decoration: none;
            color: #4c4c6d;
        }

        a:focus {
            font-size: 25px;
            min-width: 100%;
        }
    }
    .total-thefts {
        display: flex;
        flex-direction: flex-end;
        font-size: 2rem;
        color: #fff;
        margin-bottom: 25px;
    }

    .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 80%;
        background-color: #f7f6f2;
        justify-content: center;
        height: 18rem;
        font-family: 'Karla', sans-serif;
        object-fit: cover;
        border-radius: 4px;

        .img {
            font-size: 1.4rem;
            text-align: center;
            height: 18rem;
            width: 30%;
            float: left;
            background-size: cover;
            object-fit: fill;
            display: block;
            transition: 0.3s;
        }
        .img:hover {
            border: 0.2rem solid #fff;
            transform: scale(1.2);
        }

        .description {
            font-size: 1rem;
            font-weight: 300;
            text-transform: initial;
        }

        .not-found {
            margin-right: 5px;
            font-size: 1rem;
            font-weight: 300;
        }

        .info {
            text-transform: uppercase;
        }
        .date-direction {
            display: flex;
            justify-content: center;
            font-size: 0.8rem;
            text-align: center;

            h3 {
                margin-left: 5px;
                margin-top: 5px;
                font-weight: 300;
                text-align: center;
                align-items: center;
            }
            .stolen {
                border-bottom: 0.2rem solid red;
                text-transform: uppercase;
                font-size: 1rem;
                font-weight: 500;
                text-align: center;
            }
        }
    }
`;
