import styled from 'styled-components'

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
`
const Logo = styled.img`
    height: 40px; 
    margin: 10px;
`
const Title = styled.span`
    font-size: 30px;
    color: white;
`

const Nav = () => {
    return (
        <MainContainer>
            <LogoContainer>
                <Logo src='./img/logo.png' />
                <Title>Police Departament of Berlin</Title>
            </LogoContainer>
        </MainContainer>
    )
}

export default Nav