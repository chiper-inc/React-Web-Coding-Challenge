import React from "react";
import moment from "moment";
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
import { Link } from "wouter";
import { IconButton, Typography } from "@material-ui/core";
import { Event, Room, Visibility } from "@material-ui/icons";

export const Incident = ({ id, title, description, date_stolen, stolen_location, large_img }) => {
  return (
    <IncidentContainer>
      <IncidentCard>
        <IncidentImage image={large_img === null ? DEFAULT_IMAGE : large_img} />
        <IncidentTextContainer>
          <IncidentTitle>{title}</IncidentTitle>
          <IncidentText>{description === null || description === "" ? "Not desription" : description}</IncidentText>
          <IconButton aria-label="date">
            <Event />
          </IconButton>
          {moment(date_stolen).format("LLL")}
          <IconButton aria-label="location">
            <Room />
          </IconButton>
          {stolen_location}
          <Link to={`/detail/${id}`}>
            <IncidentAnchor>
              <IconButton aria-label="view">
                <Visibility />
              </IconButton>
              <Typography variant="subtitle1" color="textSecondary">
                View Detail
              </Typography>
            </IncidentAnchor>
          </Link>
        </IncidentTextContainer>
      </IncidentCard>
    </IncidentContainer>
  );
};
