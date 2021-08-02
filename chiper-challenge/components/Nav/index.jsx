import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const MainContainer = styled.div`
    width: %100;
    background-color: #191919;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 3%;
    cursor: pointer;
`
const Logo = styled(props => <Image {...props} />)`
`
const TitleContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    top: 5px;
    margin-left: 10px
    
`
const Title = styled.span`
    font-size: 1.5rem;
    color: white;
    @media (max-width: 481px) {
        font-size: 1rem;
      }
`
const SubTitle = styled.span`
    position: relative;
    bottom: 10px;
    right: 10px;
    color: #cdcdcd;
    @media (max-width: 481px) {
        font-size: .7rem;
        bottom: 5px;
      }
`

const Nav = () => {
  return (
        <MainContainer>
            <Link href='/'>
                <LogoContainer>
                    <Logo src='/img/logo.png' height='40px' width='40px' />
                    <TitleContainer>
                        <Title>Police Departament of Berlin</Title>
                        <SubTitle>Stolen Bikes</SubTitle>
                    </TitleContainer>
                </LogoContainer>
            </Link>
        </MainContainer>
  )
}

export default Nav