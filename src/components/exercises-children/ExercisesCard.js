import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ExercisesCard.css";

class ExercisesCard extends Component {
  state = {
    isFavorite: false,
  };

  handleClickFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };
  render() {
    return (
      <div className="card">
        <p className="name">{this.props.name}</p>

        <img height="200vw" width="300vw" src={this.props.images[0].image} />
        <div
          id="favorite"
          onClick={this.handleClickFavorite}
          className={this.state.isFavorite ? "isFavorite" : "notFavorite"}
        ></div>
      </div>
    );
  }
}

// specifying default props + expected prop types
ExercisesCard.defaultProps = {
  name: "xx",
};

ExercisesCard.propTypes = {
  name: PropTypes.string,
};

export default ExercisesCard;
