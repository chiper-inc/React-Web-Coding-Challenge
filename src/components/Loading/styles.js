import styled from 'styled-components';

const LoadingDonut = styled.div`
  /* display: inline-block; */
  align-self: center;
  margin-top: 25%;
  border: 15px solid hsl(222, 100%, 95%);
  border-left-color: #0f4c75;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: donut-spin 1.2s linear infinite;

  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingDonut;
