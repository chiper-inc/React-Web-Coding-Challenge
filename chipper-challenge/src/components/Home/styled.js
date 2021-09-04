import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 100%;
    margin-bottom: 15px;
    background-color: #152d35;
    display: flex;
    flex-direction: column;
    grid-gap: 4em;
    justify-content: center;
    margin-bottom: 15px;
    align-items: center;

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
        }
        .info {
        }
        .date-direction{
            display:flex;
            justify-content:center;
            
        }
    }
`;
