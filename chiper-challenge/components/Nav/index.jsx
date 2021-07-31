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
const TitleContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    top: 5px;
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
            <LogoContainer>
                <Logo src='./img/logo.png' />
                <TitleContainer>
                    <Title>Police Departament of Berlin</Title>
                    <SubTitle>Stolen Bikes</SubTitle>
                </TitleContainer>
            </LogoContainer>
        </MainContainer>
    )
}

export default Nav