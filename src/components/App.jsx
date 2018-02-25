import * as React from "react";
import SearchForm from "./SearchForm";
import '../stylesheets/index.css';

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
    </div>
    );
  }
}

export default App;