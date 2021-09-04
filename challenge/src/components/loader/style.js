import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg); 
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  height: 70vh;
`;
export const Spiner = styled.div`
  border: 5px solid #006dae;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border-left-color: gray;

  animation: 1s ${spin} linear infinite;
`;
