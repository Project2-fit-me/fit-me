import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./ExercisesCardDetails.css";

function ExercisesCardDetailed(props) {
  return (
    <div className="Pop-Up">
      <div className="closeBtn">
        <button onClick={props.closeModal}> X </button>
      </div>
      <div className="Pop-up-content">
        <div className="Pop-up-header">
        {props.name}
        </div>
        <div className="Pop-up-img">
          {props.images.map((element) => (
            <img height="150px" width="150px" src={element.image} />
          ))}
        </div>
        <div className="Description">
          <p>
            {props.description.replace(
              /<p>|<ul>|<em>|<li>|<\/p>|<\/li>|<\/ul>|<\/em>/g,
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

//specifying default props + expected prop types
// ExercisesCardDetailed.defaultProps = {
//   name: "xx",
// };

// ExercisesCardDetailed.propTypes = {
//   name: PropTypes.string,
// };

export default ExercisesCardDetailed;
