import React from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';

const MapContainer = () => {
  return (
    <Map center={[0, 0]} zoom={0}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <Marker position={[0, 0]}>
        <Popup>
          A pretty CSS3 popup.
          {' '}
          <br />
          {' '}
          Easily customizable.
        </Popup>
      </Marker> */}
    </Map>
  );
};

export default MapContainer;
