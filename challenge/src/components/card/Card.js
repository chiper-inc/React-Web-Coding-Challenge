import React from "react";
import Img from "../../assets/Img";
import { Container, ImageBici, ContainerText, Text } from "./style";
import PropTypes from "prop-types";
import { toDate } from "../../helpers/toDate";

const Card = ({
  id,
  title,
  stolen_location,
  large_img,
  frame_colors,
  date_stolen,
}) => {
  return (
    <Container to={`details/${id}`}>
      <ImageBici>
        <img src={large_img || Img.Bicicleta} alt="Bicicleta" />
      </ImageBici>
      <ContainerText>
        <Text>
          <h3>{title} </h3>
          <h5>Location of the theft:</h5> <span>{stolen_location}</span>
        </Text>
        <Text>
          <h5>Date of the theft:</h5>
          <span>{toDate(date_stolen)}</span>
        </Text>
        <Text>
          <h5>Colors: </h5>
          <span> {frame_colors[0] || "No data"}</span>
        </Text>
      </ContainerText>
    </Container>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  stolen_location: PropTypes.string,
  large_img: PropTypes.string,
  frame_colors: PropTypes.array,
  date_stolen: PropTypes.number,
};

export default Card;
