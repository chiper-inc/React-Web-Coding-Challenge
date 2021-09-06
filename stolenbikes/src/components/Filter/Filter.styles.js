import styled, { css } from "styled-components";

export const FiltersContainer = styled.section`
    margin-bottom: 2rem;

    h2 {
        margin-bottom: 20px;
    }
`
export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;

  input {
    border-bottom: 1px solid #0E6AB4;
    border-top: 1px solid #0E6AB4;
    width: 100%;
    border-left: 1px solid #0E6AB4;
    border-right: none;
    padding: .6rem;
    border-radius: 5px 0 0 5px;
    outline: none;
  }
  button {
    cursor: pointer;
    background: #0E6AB4;
    border-radius: 0 5px 5px 0;
    color: #fff;
    width: fit-content;
    border: none;
    text-transform: uppercase;
    padding: .6rem;
    outline: none;
    border-bottom: 1px solid #0E6AB4;
    border-top: 1px solid #0E6AB4;
    border-right: 1px solid #0E6AB4;
    border-left: none;
    box-shadow: none;
  }
  button:hover {
    background: #0b518a;
    color: #fff;
    border-bottom: 1px solid #0b518a;
    border-top: 1px solid #0b518a;
    border-right: 1px solid #0b518a;
    border-left: none;
  }

  ${props => props.all && css`
    button {
      cursor: pointer;
      background: #0E6AB4;
      border-radius: 5px;
      margin-left: 20px;
      color: #fff;
      width: fit-content;
      border: none;
      text-transform: uppercase;
      padding: .6rem;
      outline: none;
      border-bottom: 1px solid #0E6AB4;
      border-top: 1px solid #0E6AB4;
      border-right: 1px solid #0E6AB4;
      border-left: 1px solid #0E6AB4;
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

    input, button {
      margin-bottom: 20px;
    }
  }
`