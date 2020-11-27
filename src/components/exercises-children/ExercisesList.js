import React, { Component } from "react";
import PropTypes from "prop-types";

class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // how to pass the info (exercisesAPI) from the API? as props? key?
  render(props) {
    return (
      <div>
        {/* <section>
                    <img src={props.image}/>
                </section> */}
      </div>
      /*exercisesAPI.map(item => <ExercisesCard key={exercisesAPI.id} />);*/
    );
  }
}

// specifying default props + expected prop types
ExercisesList.defaultProps = {
  name: "xx",
};

ExercisesList.propTypes = {
  name: PropTypes.string,
};

export default ExercisesList;
