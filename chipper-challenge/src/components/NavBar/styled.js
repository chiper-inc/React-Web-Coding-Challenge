import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 15px;
    .container {
        display: flex;
        justify-content: center;
        .logo-container {
            align-self: center;
            margin-bottom: 15px;
            img {
                width: 70px;
            }
        }
        .title-container {
            font-size: 15px;
            h1 {
                padding: 0;
                margin: 0;
            }
            h3 {
                text-align: left;
                padding: 0;
                margin: 0;
            }
        }
    }
    .searchBar {
        .form-search {
            display: flex;
            justify-content: center;

            padding: 2rem;

            input {
                align-items: center;
                margin-right: 5px;
                width: 20rem;
                height: 2rem;
            }
            img {
                text-align: center;
                justify-content: center;
            }
        }
    }
    .calendar {
    }
`;
export default StyledDiv;
