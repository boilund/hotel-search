import * as React from "react";
import PropTypes from "prop-types";
import HotelRow from "./HotelRow";

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>Hotel name</th>
      </tr>
      {hotels.map(hotel => (
        <HotelRow hotel={hotel} key={hotel.id} />
      ))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any)
};

HotelsTable.defaultProps = {
  hotels: []
};

export default HotelsTable;
