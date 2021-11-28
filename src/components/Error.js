import React from "react";
import { Typography } from "@material-ui/core";
import { ErrorContainer } from "../styles/ErrorStyles";

export const Error = () => {
  return (
    <ErrorContainer>
      <Typography variant="h3" component="h3" color="error">
        Ooops, something went wrong
      </Typography>
    </ErrorContainer>
  );
};
