import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #0f4c75;
  overflow: hidden;
  /* box-shadow: 0 5px 10px 0 rgba(0,0,0,.3); */
  & img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  position: relative;
  width: 100%;
  padding: 2%;
  color: white;
  & p:nth-last-child(1) {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-23px, -23px);
  }
`;
