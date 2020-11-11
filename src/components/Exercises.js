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
  fetchExercises = () => {
    let abs = 10;
    let arms = 8;
    let back = 12;
    let calves = 14;
    let chest = 11;
    let legs = 9;
    let shoulders = 13;

    axios
      .get(`https://wger.de/api/v2/exercise/?language=2&category=${abs}`)

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
