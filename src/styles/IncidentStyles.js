import styled from 'styled-components'

export const IncidentContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const IncidentCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1200px;
  }
`

export const IncidentImage = styled.div`
  height: 300px;
  width: 100%;
  background: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  max-width: 306px;
  max-height: 300px;
`

export const IncidentTextContainer = styled.div`
  margin: 60px 45px 55px;
  @media screen and (min-width: 768px) {
    margin: 0 60px;
    max-width: 660px;
  }
`

export const IncidentTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 0 0 15px;
`

export const IncidentText = styled.p`
  font-weight: 300;
  line-height: 24px;
  margin: 0 0 30px 0;
  text-overflow: ellipsis;
  height: 20px;
  overflow: hidden;
`

export const IncidentAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #5a65c5;
  font-weight: bold;
`
