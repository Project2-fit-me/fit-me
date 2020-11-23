import React, { Component } from "react";
import PropTypes from 'prop-types';


class ExercisesCardDetailed extends Component {
    constructor(props){
      super();
      this.state = {
        counter: 0
      };
    }

    componentDidMount() {
      this.intervalID = setInterval(()=>
        this.setState(state=>({counter:
          state.counter === this.props.images.length-1 ? 0 : state.counter+1})        
        ), 500);
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    render() {
      const {name, images, description, handleClick} = this.props;

      return (
        <div className='exercisesCardDetailed' onClick={handleClick}>
          <div className='div_1_CardDetailed'>
            <img src={images[this.state.counter]} alt={name} />
            <div className='name_CardDetailed'> {name} </div>          
          </div>          
          <div className='desc_CardDetailed'> {description.replace(/(<([^>]+)>)/gi,'')} </div>
        </div>
      );
    }
}


ExercisesCardDetailed.propTypes = {
    name: PropTypes.string,
    images: PropTypes.array,
    description: PropTypes.string,
    handleClick: PropTypes.func
};


export default ExercisesCardDetailed;