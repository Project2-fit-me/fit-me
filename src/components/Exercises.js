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
      
      const numbCategories = Object.keys(categories).length;
      const loading = numbCategories === 0 || 
                      Object.keys(results).length !== numbCategories;

      const bodypart = match.params.bodypart;
      const category = bodypart[0].toUpperCase() + bodypart.slice(1); 
      const categoryID = categories[category];                      

      let content;
      
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
            <ExercisesList category={category} results={results[categoryID]} />
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


// withRouter is used so that this component has access to the match object prop
// - without it, it doesnt has that prop because its called using render={} in App.js
export default withRouter(Exercises);