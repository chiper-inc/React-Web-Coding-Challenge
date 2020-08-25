import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 0 1rem;
`
export const Header = styled.div`
  flex: 0 1 auto;
`
export const Body = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
`

export const Footer = styled.div`
  flex: 0 1 50px;
  padding: 1rem 0;
`
