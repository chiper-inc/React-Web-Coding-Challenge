import React, { useContext } from "react";
import IncidentsContext from "../context/IncidentsContext";
import {
  IncidentContainer,
  IncidentCard,
  IncidentImage,
  IncidentTextContainer,
  IncidentTitle,
  IncidentText,
  IncidentAnchor,
} from "../styles/IncidentStyles";
import DEFAULT_IMAGE from "../assets/image/default-image.png";
import moment from "moment";
import { Redirect, Link } from "wouter";
import { IconButton, Typography } from "@material-ui/core";
import { Event, Room, Language } from "@material-ui/icons";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const Detail = ({ params }) => {
  const { incidents } = useContext(IncidentsContext);

  const incident = incidents.find(item => item.id === parseInt(params.id));

  if (!incident) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Link to="/">
        <IncidentAnchor>
          <IconButton aria-label="website">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="subtitle1" color="textSecondary">
            Back
          </Typography>
        </IncidentAnchor>
      </Link>
      <IncidentContainer>
        <IncidentCard>
          <IncidentImage image={incident.large_img === null ? DEFAULT_IMAGE : incident.large_img} />
          <IncidentTextContainer>
            <IncidentTitle>{incident.title}</IncidentTitle>
            <IncidentText>
              {incident.description === null || incident.description === "" ? "Not desription" : incident.description}
            </IncidentText>
            <IconButton aria-label="date">
              <Event />
            </IconButton>
            {moment(incident.date_stolen).format("LLL")}
            <IconButton aria-label="location">
              <Room />
            </IconButton>
            {incident.stolen_location}

            <a href={incident.url}>
              <IconButton aria-label="location">
                <Language />
              </IconButton>
              {incident.url}
            </a>
          </IncidentTextContainer>
        </IncidentCard>
      </IncidentContainer>
    </>
  );
};
