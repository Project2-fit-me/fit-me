import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./ExercisesCardDetails.css";

class ExercisesCardDetailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () =>
        this.setState((state) => ({
          counter:
            state.counter === this.props.images.length - 1
              ? 0
              : state.counter + 1,
        })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    console.log(this.props.images[this.state.counter].image);
    return (
      <div className="Pop-Up">
        <div className="Pop-up-content">
          <div className="closeBtn">
            <button onClick={this.props.closeModal}> X </button>
          </div>
          <div className="Pop-up-header">{this.props.name}</div>
          <div className="Pop-up-img">
            <img
              height="150px"
              width="150px"
              src={this.props.images[this.state.counter].image}
            />
          </div>
          <div className="Description">
            <p>
              {this.props.description.replace(
                /<p>|<ul>|<em>|<li>|<\/p>|<\/li>|<\/ul>|<\/em>/g,
                ""
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

//specifying default props + expected prop types
// ExercisesCardDetailed.defaultProps = {
//   name: "xx",
// };

// ExercisesCardDetailed.propTypes = {
//   name: PropTypes.string,
// };

export default ExercisesCardDetailed;
