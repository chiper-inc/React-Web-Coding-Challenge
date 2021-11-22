import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: .5fr 1fr;
  grid-gap: 2em;
  background: linear-gradient(85deg, #434343, #262626);
  color: #b5b5b5;
  padding: 2rem;
  border-radius: 16px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .bike-img {
    max-width: 100%;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Description = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
