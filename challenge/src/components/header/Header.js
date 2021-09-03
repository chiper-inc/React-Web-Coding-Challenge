import React from "react";
import { Container, LogoImage, TitleHeader } from "./styles";

const Header = () => {
  return (
    <Container>
      <LogoImage>
        <img
          src={"https://assets.wprock.fr/emoji/joypixels/512/1f46e-2642.png"}
          alt="logo"
        />
      </LogoImage>
      <TitleHeader>
        <h1>Police Departament of Berlin</h1>
        <h3>Stolen bykes</h3>
      </TitleHeader>
    </Container>
  );
};
export default Header;
