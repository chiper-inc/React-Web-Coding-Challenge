import styled from 'styled-components';

export const BikeDetailContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  
  .title {
    grid-column: 1 / span 3;
    font-size: 2rem;
    font-weight: bold;
  }
  
  .description {
    grid-column: 1 / span 2;
    grid-row: 2 / span 3;
    font-size: 1.5rem;
  }
  
  .image {
    width: 100%;
  }
`;
