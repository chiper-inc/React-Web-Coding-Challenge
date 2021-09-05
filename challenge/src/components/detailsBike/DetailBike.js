import React from "react";
import PropTypes from "prop-types";
import { Container, SubContainer, Title, Image } from "./style";
import Img from "../../assets/Img";
import { toDate } from "../../helpers/toDate";
// import { toDate } from "../../helpers/toDate";

const DetailBike = ({ bikes }) => {
  return (
    <Container>
      <SubContainer>
        <Image>
          <img src={bikes[0]?.large_img || Img.Bicicleta} alt="Bicicleta" />
        </Image>
        <Title>
          <h2>Title:</h2>
          <span>
            {bikes[0]?.title} ({bikes[0]?.frame_colors[0]})
          </span>
          <h2>Location of the theft:</h2>
          <span>{bikes[0]?.stolen_location}</span>
          <h2>Date of the theft:</h2>
          <span>{toDate(bikes[0]?.date_stolen)}</span>
          <h2>Serial:</h2>
          <span>{bikes[0]?.serial}</span>
          <h2>Frame Model:</h2>
          <span>{bikes[0]?.frame_model}</span>
        </Title>
      </SubContainer>
    </Container>
  );
};

DetailBike.propTypes = {
  bikes: PropTypes.array,
};

export default DetailBike;
