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
  justify-content: center;
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
  @media screen and (min-width: 768px) {
    height: 420px;
    min-width: 360px;
  }
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
`

export const IncidentAnchor = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: #5a65c5;
  font-weight: bold;
  font-size: 14px;
  position: relative;
  display: inline-block;
  z-index: 1;
  padding: 5px;
  left: -5px;
`
