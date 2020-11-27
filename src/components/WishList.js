import React from "react";
import ExercisesCard from "./exercises-children/ExercisesCard";
import "./WishList.css";

function WishList() {
  let currentFavouriteExercises = JSON.parse(
    window.localStorage.getItem("FavouriteExercises")
  );
  console.log(currentFavouriteExercises);
  return (
    <div className="cardWish">
      {currentFavouriteExercises.map((exercise) => (
        <div>
          <ExercisesCard item={exercise} />
        </div>
      ))}
    </div>
  );
}

export default WishList;
