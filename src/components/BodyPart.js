import React, { Component } from "react";
import PropTypes from 'prop-types';
import './BodyPart.css';

import BBicon from './BodyPart-pics/Body-Back-icon.svg';
import BFicon from './BodyPart-pics/Body-Front-icon.svg';
import BB from './BodyPart-pics/Body-Back.jpg';
import BF from './BodyPart-pics/Body-Front.jpg';

const BodyFrontImg = (
  <figure>
    <img src={BF} alt='Body Front' useMap="#bodypart-front" />
    <map name="bodypart-front">
      <area className='calves-area' alt="Calves" href="../exercises" coords="156,749,358,975" shape="rect" />
      <area className='legs-area' alt="Legs" href="../exercises" coords="158,478,357,717" shape="rect" />
      <area className='arms-area' alt="Arms" href="../exercises" coords="348,258,461,476" shape="rect" />
      <area className='arms-area' alt="Arms" href="../exercises" coords="166,258,55,475" shape="rect" />
      <area className='abs-area' alt="Abs" href="../exercises" coords="332,288,180,457" shape="rect" />
      <area className='chest-area' alt="Chest" href="../exercises" coords="166,199,190,186,208,178,225,173,239,169,251,165,270,165,286,170,304,180,319,188,338,200,345,213,348,230,343,252,337,267,329,278,315,281,295,281,277,280,260,280,227,281,206,280,188,280,171,262,160,222" shape="poly" />
      <area className='shoulders-area' alt="Shoulders" href="../exercises" coords="123,251,134,240,138,230,148,221,152,215,156,206,162,192,173,188,189,180,200,174,189,161,177,157,162,163,147,168,134,179,123,194,119,219" shape="poly" />
      <area className='shoulders-area' alt="Shoulders" href="../exercises" coords="396,240,353,221,344,194,321,179,310,169,317,161,323,155,336,159,352,163,370,168,385,185,392,204,394,225" shape="poly" />
    </map>
  </figure>    
);

const BodyBackImg = (
  <figure>
    <img src={BB} alt='Body Back' useMap="#bodypart-back" />
    <map name="bodypart-back">
      <area className='shoulders-area' alt="Shoulders" href="/exercises" coords="112,186,49" shape="circle" />
      <area className='shoulders-area' alt="Shoulders" href="/exercises" coords="340,187,50" shape="circle" />
      <area className='back-area' alt="Back" href="/exercises" coords="172,153,173,168,175,194,171,215,149,236,143,254,139,305,148,322,160,350,156,384,153,406,150,427,175,429,208,442,228,445,243,438,268,434,290,433,303,424,300,381,298,353,305,309,308,288,309,277,304,249,292,230,280,213,278,185,278,161,280,152,254,135,231,124,204,127" shape="poly" />
      <area className='arms-area' alt="Arms" href="/exercises" coords="326,254,423,570" shape="rect" />
      <area className='arms-area' alt="Arms" href="/exercises" coords="127,247,21,575" shape="rect" />
      <area className='legs-area' alt="Legs" href="/exercises" coords="137,448,320,688" shape="rect" />
      <area className='calves-area' alt="Calves" href="/exercises" coords="129,715,322,975" shape="rect" />
    </map>
  </figure>    
);

const BodyFrontIcon = (
  <figure>
    <img className='icon' src={BFicon} alt='click to show body front' onClick={() => this.changeImage()}/>
  </figure>  
);

const BodyBackIcon = (
  <figure>
    <img className='icon' src={BBicon} alt='click to show body back' onClick={() => this.changeImage()}/>
  </figure>  
);




class BodyPart extends Component {
    constructor(props){
      super(props);
      this.state = {
        isBF: true
      };
    }

    changeImage() {

    }

    render() {
      return (
        <main>
          <figcaption>
            Choose the body part you want
          </figcaption>

          {this.state.isBF ? BodyFrontImg : BodyBackImg} 

          {this.state.isBF ? BodyBackIcon : BodyFrontIcon}           
        </main>
      );
    }
}


// specifying default props + expected prop types  
BodyPart.defaultProps = {
    name: 'xx',	
};

BodyPart.propTypes = {
    name: PropTypes.string,
};


export default BodyPart;