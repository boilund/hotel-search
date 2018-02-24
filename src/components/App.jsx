import * as React from "react";
import SearchForm from "./SearchForm";
import '../stylesheets/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
    <div>
      <h1>Geocode Result</h1>
      <SearchForm />
    </div>
    );
  }
}

export default App;