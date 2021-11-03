import { MapType } from '../../types/types';
import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  latitude: MapType['latitude'];
  longitude: MapType['longitude'];
  zoom: MapType['zoom'];
}
const mapboxToken =
  'pk.eyJ1IjoiZW1hbnVlbGp0YyIsImEiOiJja3ZqcjZsY2UybzNmMnVxaTVwNXpsMXd5In0.AXN4b5miAcgBzZUBw66sxw';

const Map = ({
  latitude = 40.78343,
  longitude = -73.96625,
  zoom = 11,
}: MapProps) => {
  console.log('props map', latitude, longitude, zoom);
  const withMap = '100%';
  const heightMap = '400px';
  return (
    <div className="w-full">
      <ReactMapGl
        width={withMap}
        height={heightMap}
        latitude={latitude}
        longitude={longitude}
        zoom={zoom}
        //onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v10"
      />
    </div>
  );
};

export default Map;
