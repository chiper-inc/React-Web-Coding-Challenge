import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  width: 90%;
  border-radius: 8px;
  justify-content: space-evenly;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0,0,0,.2);
  transition: box-shadow .1s;
  transition: transform .1s;

  & > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
    }
  }
`
export const TextContainer = styled.div`
  padding: 30px 40px;

  & > h3 {
    margin-bottom: 50px;
    color: #0E6AB4;
    display: inline-block;
  }
`

export const DetailsContainer = styled.div`
  display: grid;
  min-width: 600px;
  grid-template-columns: 1fr 1fr;

  & > strong {
    color: #0E6AB4;
    line-height: 20px;
    margin-bottom: 20px;
  }
  & strong > span {
    color: #333;
    font-weight: 400;
  }

  @media only screen and (max-width: 768px) {
    min-width: 100%;
    grid-template-columns: 1fr;
  }
`