import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ExercisesCard.css";

class ExercisesCard extends Component {
  state = {
    isFavorite: false,
    isInWishList: [],
  };

  handleClickFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };

  sendToWishList = () => {
    // this.setState({ isInWishList: item });
  };

  render() {
    return (
      <div className="card">
        <div onClick={() => this.props.displayPopUpCard(this.props.item)}>
          <p className="name">{this.props.name}</p>

          <img height="200vw" width="300vw" src={this.props.images[0].image} />
        </div>
        <div
          id="favorite"
          onClick={
            this.state.isFavourite
              ? this.sendToWishList
              : this.handleClickFavorite
          }
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
