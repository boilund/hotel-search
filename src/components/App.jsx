import * as React from "react";
import SearchForm from "./SearchForm";
import '../stylesheets/index.css';
import GeocodeResult from "./GeocodeResult";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handlePlaceSubmit(place) {
    console.log(place);
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