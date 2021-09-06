import styled, { css } from 'styled-components'

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-decoration: underline;
    color: #0E6AB4;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;

  & > img {
    height: 450px;
    object-fit: cover;
  }

  ${props => props.map && css`
    display: flex;
    align-items: center;
    & > p {
      line-height: 20px;
    }
  `}

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    & > img {
      width: 100%;
      height: 100%;
    }

    ${props => props.map && css`
      grid-template-columns: 1fr;
      width:100%;
      & > p {
        line-height: 20px;
      }
    `}
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > strong {
    /* color: #01C29C; */
    line-height: 20px;
    margin-bottom: 20px;
    color: #0E6AB4;
  }
  & strong > span {
    color: #333;
    font-weight: 400;
  }

  @media only screen and (max-width: 768px) {
    & > strong {
      margin-bottom: 5px;
    }
  }
`

export const IncidentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

export const Date = styled.p`
  margin: 1rem 0 2rem;
`