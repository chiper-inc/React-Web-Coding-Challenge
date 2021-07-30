import Nav from '../components/Nav'
import List from '../components/List'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default function Home() {
  return (
    <>
    <Nav/>
    <HomeContainer> 
      <List />
    </HomeContainer>
    </>
  )
}