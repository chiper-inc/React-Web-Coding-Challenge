import { HeaderWrap, Logo, Titles, HeaderText1, HeaderText2 } from './Header.styles';
import police_brand from './../../assets/img/police-brand.png';

export const Header = () => {
  return (
    <header>
        <HeaderWrap>
            <Logo src={police_brand}></Logo>
            <Titles>
                <HeaderText1>Stolen Bike App</HeaderText1>
                <HeaderText2>Police Departament of Berlin</HeaderText2>
            </Titles>
        </HeaderWrap>
    </header>
  )
}
