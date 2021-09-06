import styled, { css } from "styled-components";

export const FiltersContainer = styled.section`
    margin-bottom: 2rem;

    h2 {
        margin-bottom: 20px;
    }
`
export const Filters = styled.div`
  margin-top:10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  input {
    border: 1px solid #404040;
    width: 80%;
    padding: .6rem;
    border-radius: 5px;
    outline: none;
  }

  button {
    cursor: pointer;
    background: #0E9019;
    border-radius: 5px;
    color: #fff;
    width: fit-content;
    border: none;
    text-transform: uppercase;
    padding: .6rem;
    outline: none;
    border: 1px solid #0E9019;
    box-shadow: none;
    transition:0.3s;
  }
  button:hover {
    background: #4B6853;
    color: #fff;
    border: 1px solid #4B6853;
    transition: 0.3s;
  }

  ${props => props.all && css`
    button {
      cursor: pointer;
      background: #0E9019;
      margin-left:10px;
      border-radius: 5px;
      color: #fff;
      width: fit-content;
      border: none;
      text-transform: uppercase;
      padding: .6rem;
      outline: none;
      box-shadow: none;
    }
    button:hover {
      background: #0b518a;
      color: #fff;
      border-bottom: 1px solid #0b518a;
      border-top: 1px solid #0b518a;
      border-right: 1px solid #0b518a;
      border-left: 1px solid #0b518a;
    }
  `}

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction:column;
    button {
      margin-left:0;
    }

    input, button {
      margin-bottom: 20px;
    }
  }
`