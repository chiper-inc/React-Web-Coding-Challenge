import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import CardMedia from "@mui/material/CardMedia";
import bikes from "../../assets/img/bikes_not_found.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Map from "../../components/Map";
import moment from "moment";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ openModal, setOpenModal, data }) {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullScreen
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Police Department of Berlin
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              data-testid="button1"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="div">
                {data?.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="div" color="text.secondary">
                Stolen:{" "}
                {moment
                  .unix(data?.date_stolen)
                  .format("MMMM Do YYYY, h:mm:ss a")}{" "}
                at {data?.stolen_location}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={data?.large_img || bikes}
                alt="Bikes not found"
              />
            </Grid>
            <Grid item sm container>
              <Grid item xs={12}>
                <Typography variant="h6" component="div">
                  Descrption of Inciden
                </Typography>
                <Typography variant="h6" component="div" color="text.secondary">
                  {data?.description || "No description"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Map />
            </Grid>
          </Grid>
        </Container>
      </Dialog>
    </div>
  );
}
