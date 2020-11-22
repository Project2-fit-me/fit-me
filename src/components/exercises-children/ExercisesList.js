import React, { Component } from "react";
import PropTypes from 'prop-types';

import ExercisesCard from './ExercisesCard';
import ExercisesCardDetailed from "./ExercisesCardDetailed";



class ExercisesList extends Component {
    constructor(props){
      super();

      this.state = {
        showList: true,  
        exID: '',      
      };

      this.showList = this.showList.bind(this);      
    }

    showList(event){
      this.setState(state => ({showList: !state.showList}), 
                    ()=>this.setState({exID: event.target.id})
      );
    }
    
    render() {
        const {category, results} = this.props;
        const extraCaption = <span> {this.state.showList ? (results.length ? 'pick one for details' : '') : 'click below to show all'} </span>; 

        return (    
        <>  
          <figcaption> {category} exercises<br/>{extraCaption} </figcaption>                       
          <div className={this.state.showList ? 'exercisesList' : 'containerCardDetailed'}>
            {
            results.length ?  
            (
              this.state.showList ?
              results.map((el, index) => 
                <ExercisesCard key={el.id} handleClick={this.showList} {...el} id={index} />)
              :
              <ExercisesCardDetailed results={results[Number(this.state.exID)]} handleClick={this.showList}/>
            )
            :
            <ExercisesCard />
            }
          </div>
        </>  
        );
    }
}



ExercisesList.propTypes = {
    category: PropTypes.string,
    results: PropTypes.array,
};


export default ExercisesList;