import * as React from "react";
import PropTypes from "prop-types";
import "../stylesheets/SearchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "Turning Torso"
    };
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }

  render() {
    return (
      <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          size="30"
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
          className="place-input"
        />
        <input className="submit-button" type="submit" value="search" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
