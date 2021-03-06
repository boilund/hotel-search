import * as React from "react";
import { geocode } from "../domain/Geocoder";
import SearchForm from "./SearchForm";
import GeocodeResult from "./GeocodeResult";
import Map from "./Map";
import HotelsTable from "./HotelsTable";
import "../stylesheets/App.css";
import "../stylesheets/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 55.6133242,
        lng: 12.976362
      },
      hotels: [
        {
          name: "scandic",
          id: 111,
          url: "https://google.com"
        },
        {
          name: "Radison blue",
          id: 222,
          url: "https://www.spotify.com/se/"
        }
      ]
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
      <div className="app">
        <h1 className="app-title">Hotel search</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={this.state.location} />
          <div className="result-right">
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <h2>Search result</h2>
            <HotelsTable hotels={this.state.hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
