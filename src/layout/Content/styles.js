import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  --featured-img: linear-gradient(180deg, #fff, #262626);
  background-color: #262626;
  background-repeat: no-repeat;
  background-image: radial-gradient(50% 50% at top center, rgba(0, 0, 0, .66), #262626), var(--featured-img);
`;

export const Main = styled.main`
  padding: 40px 10%;
`;
