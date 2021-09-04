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
            padding: 1.5rem;
            .form-description {
                margin-right: 15px;
                outline: none;
            }
            .form-from {
                margin-right: 25px;
                outline: none;
            }
            .form-to {
                margin-right: 25px;
                margin-left: 5px;
                outline: none;
            }
            .btn-form {
                margin-left: 15px;
                outline: none;
            }
        }
        /* img{
            width:20px;
            margin-top:2px;
            margin-left:3px;
            position:absolute;
        } */
        .btn-reset {
            margin: 10px 0;
        }
    }
`;
export default StyledDiv;
