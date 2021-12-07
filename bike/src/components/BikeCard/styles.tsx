import styled from 'styled-components';

export const BikeCardContent = styled.div`
  display: flex;
  position: relative;
  height: 10rem;
  margin: 1rem 2rem;
  background-color: #f1f0f0;
  border: 2px solid #ccc;
  border-radius: 1rem;
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  img {
    width: 5rem;
    height: 5rem;
    position: absolute;
  }  
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 75%;
  padding: 1rem;
`;

export const InfoTitle = styled.a`
  color: #3498db;
  text-decoration: none;
`;

export const InfoDescription = styled.div`
  height: 100%;
  overflow: hidden;
  text-align: justify;
`;

export const InfoDate = styled.div``;
