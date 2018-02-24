import * as React from "react";

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: 'Turning Torso',
    };
  }

  handlePlaceChange(place) {
    this.setState({place});
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
        />
      </form>
    );
  }
}

export default SearchForm;