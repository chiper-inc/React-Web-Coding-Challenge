import React from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import { LoadingContainer } from "../styles/LoadingStyles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
      <Typography variant="h3" component="h3" color="primary">
        Loading...
      </Typography>
    </LoadingContainer>
  );
};
