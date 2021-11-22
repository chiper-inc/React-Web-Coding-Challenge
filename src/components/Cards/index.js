import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import bikes from "../../assets/img/bikes_not_found.jpg";
import moment from "moment";

export default function MediaControlCard({
  img,
  title,
  description,
  location,
  date,
  handleClickOpen,
}) {
  return (
    <>
      <Card sx={{ display: "flex", margin: "1em" }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={img || bikes}
          alt="Bikes not found"
        />
        <CardActionArea onClick={handleClickOpen}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              textAlign: "left",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography component="div">
                {description || "No description"}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {moment.unix(date).format("MMMM Do YYYY")} - {location}
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}
