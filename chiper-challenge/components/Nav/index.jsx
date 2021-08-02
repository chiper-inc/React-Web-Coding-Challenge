import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const MainContainer = styled.div`
    width: %100;
    background-color: #191919;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 7%;
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
    font-size: 25px;
    color: white;
`
const SubTitle = styled.span`
    position: relative;
    bottom: 10px;
    right: 10px;
    color: #cdcdcd;
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