import { ReactNode } from "react";
import { Footer } from "../../containers/Footer";
import { Wrapper, Main } from "./styles";

interface IProps {
  children: ReactNode
};

const HomeLayout = ({ children }: IProps) => {
  return (
    <Wrapper>
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default HomeLayout;
