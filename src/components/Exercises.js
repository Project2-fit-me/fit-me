import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ExercisesHeader from "./exercises-children/ExercisesHeader";
import ExercisesList from "./exercises-children/ExercisesList";

class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
    };
  }

  componentDidMount() {
    console.log("hello");
    this.fetchExercises();
  }
  componentDidUpdate() {
    console.log("hello");
    this.fetchExercises();
  }

  bodyPartNumberGenerator = (bodyPartString) => {
    switch (bodyPartString) {
      case "abs":
        return 10;
      case "arms":
        return 8;
      case "back":
        return 12;
      case "calves":
        return 14;
      case "chest":
        return 11;
      case "legs":
        return 9;
      case "shoulders":
        return 13;
      default:
        return 10;
    }
  };

  fetchExercises = () => {
    let bodyPartCategoryNumber = this.bodyPartNumberGenerator(
      this.props.match.params.bodypart
    );

    axios
      .get(
        `https://wger.de/api/v2/exercise/?language=2&category=${bodyPartCategoryNumber}`
      )

      .then((response) =>
        this.setState({
          exercises: response.data.results,
        })
      );
  };

  render() {
    return (
      <div>
        {this.state.exercises.map((item) => (
          <p>{item.name}</p>
        ))}
        <ExercisesHeader key={"Exercises' Header"} />,
        <ExercisesList key={"Exercises' List"} />,
      </div>
    );
  }
}

// specifying default props + expected prop types
Exercises.defaultProps = {
  name: "xx",
};

Exercises.propTypes = {
  name: PropTypes.string,
};

export default Exercises;
