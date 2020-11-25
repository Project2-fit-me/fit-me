import React, { Component } from "react";
// import PropTypes from "prop-types";

function ExercisesCardDetailed(props) {
  return (
    <div>
      <div className="Pop-Up">
        <button onClick={props.closeModal}> X </button>
      </div>
      {props.name}
      {props.images.map((element) => (
        <img height="150px" width="150px" src={element.image} />
      ))}

      <p>
        {props.description.replace(
          /<p>|<ul>|<em>|<li>|<\/p>|<\/li>|<\/ul>|<\/em>/g,
          ""
        )}
      </p>
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
