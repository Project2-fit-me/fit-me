import React, { Component } from "react";
import PropTypes from 'prop-types';

import ExercisesCard from './ExercisesCard';
import ExercisesCardDetailed from "./ExercisesCardDetailed";



class ExercisesList extends Component {
    constructor(props){
      super();

      this.state = {
        showList: true,  
        exID: null,      
      };

      this.showList = this.showList.bind(this);      
    }

    showList(event){
      this.setState(state => ({showList: !state.showList}), 
                    ()=>{this.state.showList ?
                         this.setState({exID: null}) :
                         this.setState({exID: event.target.id})}
      );
    }
    
    render() {
        return (                         
          <div className='exercisesList'>
            {
            this.props.results.length ?  
            (
              this.state.showList ?
              this.props.results.map((el, index) => 
                <ExercisesCard key={el.id} handleClick={this.showList} {...el} id={index} />)
              :
              <ExercisesCardDetailed results={this.props.results[this.state.exID]} handleClick={this.showList}/>
            )
            :
            <ExercisesCard />
            }
          </div>
        );
    }
}



ExercisesList.propTypes = {
    results: PropTypes.array,
};


export default ExercisesList;