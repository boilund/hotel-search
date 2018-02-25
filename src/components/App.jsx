import * as React from "react";
import SearchForm from "./SearchForm";
import '../stylesheets/index.css';
import GeocodeResult from "./GeocodeResult";
import axios from "axios";

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handlePlaceSubmit(place) {
    axios.get(GEOCODE_ENDPOINT, { params: { address: place } })
    .then(results => {
      const result = results.data.results[0];
      const location = result.geometry.location;
      this.setState({
        address: result.formatted_address,
        lat: location.lat,
        lng: location.lng
      });
    });
  }

  render() {
    return (
    <div>
      <h1>Geocode Result</h1>
      <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
      <GeocodeResult address={this.state.address} lat={this.state.lat} lng={this.state.lng} />
    </div>
    );
  }
}

export default App;