import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactMapGL, { Marker } from "react-map-gl";
import {
  Container,
  SubContainer,
  Title,
  Image,
  Cont,
  Description,
  Mapview,
  TitleDescription,
  Text,
} from "./style";
import Img from "../../assets/Img";
import { toDate } from "../../helpers/toDate";

const DetailBike = ({ bike }) => {
  const [viewport, setViewport] = useState({
    latitude: 52.4972347,
    longitude: 13.3429021,
    position: "relative",
    top: 0,
    bottom: 0,
    zoom: 15,
    height: "100%",
    width: "100%",
  });
  const {
    title,
    stolen_location,
    date_stolen,
    serial,
    frame_model,
    large_img,
    description,
    stolen_record,
  } = bike;

  useEffect(() => {
    if (Object.keys(bike).length) {
      setViewport({
        ...viewport,
        latitude: stolen_record.latitude,
        longitude: stolen_record.longitude,
      });
    }
  }, [bike]);
  console.log(viewport.latitude);

  return (
    <Container>
      <SubContainer>
        <Image>
          <img src={large_img || Img.Bicicleta} alt="Bicicleta" />
        </Image>
        <Title>
          <h2>Title:</h2>
          <span>{title}</span>
          <h2>Location of the theft:</h2>
          <span>{stolen_location}</span>
          <h2>Date of the theft:</h2>
          <span>{toDate(date_stolen)}</span>
          <h2>Serial:</h2>
          <span>{serial}</span>
          <h2>Frame Model:</h2>
          <span>{frame_model}</span>
        </Title>
      </SubContainer>
      <Cont>
        <Description>
          <TitleDescription>
            <h2>Case Description</h2>
          </TitleDescription>
          <Text>
            <span>{description || "Sorry description not found.."}</span>
          </Text>
        </Description>
        <Mapview>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            onViewportChange={(viewport) => setViewport(viewport)}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              latitude={viewport.latitude}
              longitude={viewport.longitude}
            ></Marker>
          </ReactMapGL>
        </Mapview>
      </Cont>
    </Container>
  );
};

DetailBike.propTypes = {
  bike: PropTypes.object,
};

export default DetailBike;
