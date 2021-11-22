import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export default function Alert() {

  return (
    <>
      <CssBaseline />
      <>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={200} height={150} />
            </Grid>
            <Grid item sm container>
              <Grid item xs={12}>
                <Skeleton variant="text" height={40} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="text" height={90} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="text" height={30} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    </>
  );
}
