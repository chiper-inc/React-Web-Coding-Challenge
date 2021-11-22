import { ReactNode } from "react";
import { Header } from "../../containers/Header";
import { Footer } from "../../containers/Footer";
import { Wrapper, Main } from "./styles";

interface IProps {
  children: ReactNode,
  title?: string,
};

const Layout = ({ children, title }: IProps) => {
  return (
    <Wrapper>
      <Header title={title}/>
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
