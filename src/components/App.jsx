import * as React from "react";
import { geocode } from "../domain/Geocoder";
import SearchForm from "./SearchForm";
import GeocodeResult from "./GeocodeResult";
import Map from "./Map";
import "../stylesheets/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 55.6133242,
        lng: 12.976362
      }
    };
  }

  setErrorState(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0
      }
    });
  }

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case "OK": {
            this.setState({
              address,
              location
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
          location={this.state.location}
        />
        <Map location={this.state.location} />
      </div>
    );
  }
}

export default App;
