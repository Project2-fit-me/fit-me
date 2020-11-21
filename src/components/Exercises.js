import React, { Component } from "react";
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import BFicon from './BodyPart-pics/Body-Front-icon.jpg';
import BBicon from './BodyPart-pics/Body-Back-icon.jpg';
import './Exercises.css';

import LoadingSpinner from './exercises-children/LoadingSpinner';
import ExercisesHeader from './exercises-children/ExercisesHeader';
import ExercisesList from './exercises-children/ExercisesList';



class Exercises extends Component {

    render() {
           
      const {match, categories, results} = this.props;

      let content;
      
      const loading = Object.keys(categories).length === 0 || 
                      Object.keys(results).length !== 
                      Object.keys(categories).length;

      const bodypart = match.params.bodypart;
      const category = bodypart[0].toUpperCase() + bodypart.slice(1); 
      const categoryID = Number(categories[category]);                      


      if(loading) {

        content = (
          <>
            <ExercisesHeader category={category}/> 
            <LoadingSpinner />
          </>
        );     

      } else if(Object.keys(categories).includes(category)) {        

        content = (
          <>
            <ExercisesHeader category={category}/> 
            <ExercisesList results={results[categoryID]} />
          </>
        );

      } else {

        content = <figcaption> Wrong body part <br/> <span> click on the image </span> </figcaption>; 

      }

      return (
        <main>
            <Link to='/bodypart'>
              <figure className='backFigure'>
                <img className='backBF' src={BFicon} alt='body front icon' />
                <img className='backBB' src={BBicon} alt='body back icon' />                 
              </figure> 
            </Link>
            {content}          
        </main>
      );
    }
}


Exercises.propTypes = {
  match: PropTypes.object,
  categories: PropTypes.object,
  results: PropTypes.object,
};


// withRouter is used so that this component has access to the history object prop
// - without it, it doesnt has that prop because its called using render={} in App.js
// - using inline render was the only way i found to pass props to <Exercises />
export default withRouter(Exercises);