import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 6px;
  padding: 0.5rem 0;
  margin: 0.5rem 0 0.5rem 1rem;
  width: 11rem;
  background: #00264a;
  color: white;
  border: 2px solid white;
  cursor: pointer;
`

export const Pagination = ({ handlerNext, handlerPrev }) => {

    return (
        <>
            <Button onClick={() => handlerPrev()}>Prev</Button>
            <Button onClick={() => handlerNext()}>Next</Button>

        </>
    )
}
