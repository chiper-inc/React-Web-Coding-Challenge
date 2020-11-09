import React from 'react';
import './map.scss';



function mapSource(address) {
  const newAddress = address.replace(/ /g, "%20");
  const src =
    "https://maps.google.com/maps?q=" +
    newAddress +
    "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return src;
}


export default class map extends Component {

  render() {

    return (
        <div className="Map">
          <iframe
            width="100%"
            height="500"
            id="map"
            src={mapSource(incident.address)}
            frameBorder="0"
            scrolling="no"
            marginHeight="10"
            marginWidth="10"
          ></iframe>
    </div>
    );
  }
}