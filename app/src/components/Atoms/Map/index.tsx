import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Container } from './styles';

interface MapProps {
  lat: number;
  lng: number;
  title: string;
}

const Map: React.FC<MapProps> = ({ lat, lng, title }: MapProps) => {
  const [map, setMap] = React.useState<any>(null);
  React.useEffect(() => {
    if (map) {
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);
  return (
    <Container>
      <MapContainer
        center={[lat, lng]}
        zoom={20}
        scrollWheelZoom={false}
        style={{ height: `400px`, width: `100%` }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]} draggable={true}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
