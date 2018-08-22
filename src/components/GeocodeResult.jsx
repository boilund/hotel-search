import * as React from "react";
import PropTypes from "prop-types";
import "../stylesheets/GeocodeResult.css";

const GeocodeResult = ({ address, lat, lng }) => (
  <ul className="geocode-result">
    <li>Address: {address}</li>
    <li>Latitude: {lat}</li>
    <li>Longitude: {lng}</li>
  </ul>
);

GeocodeResult.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

GeocodeResult.defaultProps = {
  address: ""
};

export default GeocodeResult;
