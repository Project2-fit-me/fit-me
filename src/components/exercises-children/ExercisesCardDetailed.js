import React, { Component } from "react";
import PropTypes from 'prop-types';



class ExercisesCardDetailed extends Component {
    constructor(props){
      super(props);
      this.state = {
        counter: -1,

        currentImageURL: '',
      };
    }

    componentDidMount() {
      this.intervalID = setInterval(()=>{
        this.setState(state=>({counter:
          state.counter === this.props.results.images.length-1 ? 0 : state.counter+1}),
        
          ()=>this.setState(state => ({currentImageURL:this.props.results.images[state.counter]}))
        );
      }, 500);
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    render() {
      const {results, handleClick} = this.props;

      return (
        <div className='exercisesCardDetailed' onClick={handleClick}>
          <div className='div_1_CardDetailed'>
            <img src={this.state.currentImageURL} alt={results.name} />
            <div className='name_CardDetailed'> {results.name} </div>          
          </div>          
          <div className='desc_CardDetailed'> {results.description.replace(/(<([^>]+)>)/gi,'')} </div>
        </div>
      );
    }
}


ExercisesCardDetailed.propTypes = {
    results: PropTypes.object,
    handleClick: PropTypes.func
};


export default ExercisesCardDetailed;