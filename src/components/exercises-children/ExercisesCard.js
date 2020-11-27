import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ExercisesCard.css";
import { withRouter } from "react-router";

class ExercisesCard extends Component {
  state = {
    isFavorite: false,
  };

  componentDidMount() {
    let currentFavouriteExercises = JSON.parse(
      window.localStorage.getItem("FavouriteExercises")
    );

    // console.log(
    //   currentFavouriteExercises.some(
    //     (exercise) => exercise.id === this.props.item.id
    //   )
    // );
    if (currentFavouriteExercises != null) {
      if (
        currentFavouriteExercises.some(
          (exercise) => exercise.id === this.props.item.id
        )
      ) {
        this.setState({ isFavorite: true });
      }
    }
  }

  handleClickFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite }, () => {
      if (this.state.isFavorite) {
        this.sendToWishList();
      } else {
        this.removeFromWishlist();
      }
    });
  };

  sendToWishList = () => {
    let currentFavouriteExercises = JSON.parse(
      window.localStorage.getItem("FavouriteExercises")
    );
    // Check if the array has already been created or not
    if (currentFavouriteExercises == null) {
      currentFavouriteExercises = [this.props.item];
      // If it has been created push to the arraycon
    } else {
      currentFavouriteExercises.push(this.props.item);
    }

    window.localStorage.setItem(
      "FavouriteExercises",
      JSON.stringify(currentFavouriteExercises)
    );
  };

  removeFromWishlist = () => {
    let currentFavouriteExercises = JSON.parse(
      window.localStorage.getItem("FavouriteExercises")
    );

    currentFavouriteExercises = currentFavouriteExercises.filter(
      (exercise) => exercise.id !== this.props.item.id
    );

    window.localStorage.setItem(
      "FavouriteExercises",
      JSON.stringify(currentFavouriteExercises)
    );
  };

  render() {
    return (
      <div className="card">
        <div
          onClick={
            !this.props.location.pathname.includes("/wishlist")
              ? () => this.props.displayPopUpCard(this.props.item)
              : null
          }
        >
          <img
            height="200vw"
            width="300vw"
            src={this.props.item.images[0].image}
            alt="fu"
          />
          <p className="name">{this.props.item.name}</p>
        </div>
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

export default withRouter(ExercisesCard);
