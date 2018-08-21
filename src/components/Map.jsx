import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import "../stylesheets/Map.css";

const InnerMap = withGoogleMap(props => {
  const { position } = props;

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 55.6133242, lng: 12.976362 }}
    >
      {props.isMarkerShown && <Marker position={position} />}
    </GoogleMap>
  );
});

const Map = props => {
  const { lat, lng } = props;
  const position = { lat, lng };

  return (
    <InnerMap
      containerElement={<div />}
      mapElement={<div className="map" />}
      position={position}
      isMarkerShown={position}
    />
  );
};

export default Map;
