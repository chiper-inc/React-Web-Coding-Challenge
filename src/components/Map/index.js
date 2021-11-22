import { Map, GoogleApiWrapper } from "google-maps-react";

const Maps = (props) => {
  const { google } = props;
  const containerStyle = {
    width: '80%',
    height: '70%'
  };
  return (
    <>
      <Map
        containerStyle={containerStyle}
        google={google}
        zoom={13}
        initialCenter={{ lat: 52.5229397, lng: 13.4146747 }}
      />
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDexqua795BSl-ZAoDn6OPF83k0rMT4s68",
})(Maps);
