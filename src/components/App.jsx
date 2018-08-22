import * as React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import GeocodeResult from "./GeocodeResult";
import Map from "./Map";
import "../stylesheets/index.css";

const GEOCODE_ENDPOINT = "https://maps.googleapis.com/maps/api/geocode/json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 55.6133242,
      lng: 12.976362
    };
  }

  setErrorState(message) {
    this.setState({
      address: message,
      lat: 0,
      lng: 0
    });
  }

  handlePlaceSubmit(place) {
    axios
      .get(GEOCODE_ENDPOINT, { params: { address: place } })
      .then(results => {
        const data = results.data;
        const result = data.results[0];

        switch (data.status) {
          case "OK": {
            const location = result.geometry.location;
            this.setState({
              address: result.formatted_address,
              lat: location.lat,
              lng: location.lng
            });
            break;
          }
          case "ZERO_RESULTS": {
            this.setErrorState("No results");
            break;
          }
          default: {
            this.setErrorState("Get an error");
            break;
          }
        }
      })
      .catch(() => {
        this.setErrorState("Connection error");
      });
  }

  render() {
    return (
      <div>
        <h1>Geocode Result</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
