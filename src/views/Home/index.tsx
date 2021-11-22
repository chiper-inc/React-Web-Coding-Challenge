import HomeLayout from "../../layout/Home";
import { Title } from "../../components/Title";
import { BtnLink } from "../../components/BtnLink";
import bike from "../../assets/images/bike.svg";
import { Img, Section } from "./styles";

const HomeView = () => {
  return (
    <HomeLayout>
      <>
        <Section>
          <Img src={bike} />
        </Section>
        <Section>
          <Title text="Stolen Bike register" />
          <BtnLink to="/cases" text="Go to reports" />
        </Section>
      </>
    </HomeLayout>
  );
};

export default HomeView;
