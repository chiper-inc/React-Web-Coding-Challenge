import React, { Component } from "react";
import { Loading } from "./LoadingComponent";
function mapSource(address) {
  const newAddress = address.replace(/ /g, "%20");
  const src =
    "https://maps.google.com/maps?q=" +
    newAddress +
    "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return src;
}

function description(description) {
  if (description === null || description === "") {
    return "No description available";
  } else {
    return description;
  }
}

export default class IncidentDetail extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="col-5 m-auto ">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4 className="red">{this.props.errMess}</h4>
          </div>
        </div>
      );
    } else if (this.props.incidents != null) {
      const incident = this.props.incidents.filter(
        (incident) => incident.id.toString() === this.props.id
      )[0];
      return (
        <div className="container">
          <div className="row">
            <div className="col-9 m-auto p-2 incidentDetail">
              <div className="col-12 col-md-10 m-4">
                <h3 className="mt-5 ">{incident.title}</h3>
                <p>
                  occurred at{" "}
                  {new Date(incident.occurred_at * 1000).toDateString()}-{" "}
                  {incident.address}
                </p>
              </div>
              <div className="mapouter col-12">
                <div className="gmap_canvas col-12">
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    title="addressZoneMap"
                    src={mapSource(incident.address)}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
              <div className="col-12 col-md-10 m-4">
                <h3>DESCRIPTION OF INCIDENT</h3>
                <p>{description(incident.description)}</p>
              </div>
              <div className="col-12 col-md-10 m-4">
                <h3>
                  Reported at:{" "}
                  {new Date(incident.updated_at * 1000).toDateString()}
                </h3>
              </div>
            </div>
          </div>
        </div>
      );
    } else return <div></div>;
  }
}
