import React from "react";
import { Link } from "react-router-dom";
function description(description) {
  if (description === null || description === "") {
    return "No description available";
  } else {
    return description;
  }
}
function RenderItem({ incident }) {
  let url = incident.media.image_url_thumb;
  const onLoad = () => {
    if (url === null) {
      url =
        "https://cdn0.iconfinder.com/data/icons/sports-linear-white-with-square-black-background/2048/Cycle-512.png";
    }
  };

  return (
    <div id={incident.id.toString()}>
      <div className="row incidentElement">
        <div className="col-4 offset-1 offset-xs-2 col-md-4 offset-md-0">
          <img
            className="  md-float-left "
            onLoad={onLoad(this)}
            src={url}
            width={200}
            alt={incident.title}
          />
        </div>
        <div className="col-8 col-md-8 m-auto">
          <div className="row ">
            <Link to={`/case/${incident.id}`} className=" col-12 itemTitle ">
              <h3 className="mr-auto">{incident.title}</h3>{" "}
            </Link>
          </div>
          <div className="row itemDescription">
            <p className=" mr-auto">{description(incident.description)}</p>
          </div>
          <div className="row itemDescription">
            <p className="mr-auto">
              {new Date(incident.occurred_at * 1000).toDateString()} -
              {incident.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RenderItem;
