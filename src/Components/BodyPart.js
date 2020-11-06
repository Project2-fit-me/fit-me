import React, { Component } from "react";
import '../reset.css';
import './BodyPart.css';

import BBicon from './Images/BodyPart-pics/Body-Back-icon.jpg';
import BFicon from './Images/BodyPart-pics/Body-Front-icon.jpg';
import BB from './Images/BodyPart-pics/Body-Back.jpg';
import BF from './Images/BodyPart-pics/Body-Front.jpg';


const BodyFrontImg = (
  <figure>
    <img src={BF} alt='Body Front' useMap="#bodypart-front" />
    <map name="bodypart-front">
      <area className='calves-area' alt="Calves" href="../exercises/calves" coords="91,371,167,372,169,488,80,487" shape="poly" />
      <area className='legs-area' alt="Legs" href="../exercises/legs" coords="80,261,178,262,167,360,90,361" shape="poly" />
      <area className='arms-area' alt="Arms" href="../exercises/arms" coords="172,136,196,126,230,281,206,284" shape="poly" />
      <area className='arms-area' alt="Arms" href="../exercises/arms" coords="80,126,85,175,65,285,37,277,65,123" shape="poly" />
      <area className='abs-area' alt="Abs" href="../exercises/abs" coords="87,145,165,148,165,206,130,251,93,212" shape="poly" />
      <area className='chest-area' alt="Chest" href="../exercises/chest" coords="81,98,102,92,121,87,135,90,152,93,167,105,171,127,155,142,122,139,96,140,85,125,80,108" shape="poly" />
      <area className='shoulders-area' alt="Shoulders" href="../exercises/shoulders" coords="68,118,75,105,79,91,91,88,95,81,53,77,47,103,53,116" shape="poly" />
      <area className='shoulders-area' alt="Shoulders" href="../exercises/shoulders" coords="156,78,201,81,202,122,180,118" shape="poly" />
    </map>
  </figure>  
);


const BodyBackImg = (
  <figure>
    <img src={BB} alt='Body Back' useMap="#bodypart-back" />
    <map name="bodypart-back">
      <area className='shoulders-area' alt="Shoulders" href="/exercises/shoulders" coords="156,73,187,83,185,119,158,114" shape="poly" />
      <area className='shoulders-area' alt="Shoulders" href="/exercises/shoulders" coords="64,74,39,86,30,100,40,121,65,108" shape="poly" />
      <area className='back-area' alt="Back" href="/exercises/back" coords="66,80,114,61,154,80,149,206,108,228,77,203" shape="poly" />
      <area className='arms-area' alt="Arms" href="/exercises/arms" coords="156,118,179,121,206,278,175,285" shape="poly" />
      <area className='arms-area' alt="Arms" href="/exercises/arms" coords="37,287,69,159,65,116,53,116,45,129,5,270" shape="poly" />
      <area className='legs-area' alt="Legs" href="/exercises/legs" coords="68,230,154,229,162,289,148,342,121,353,103,351,73,346,63,287" shape="poly" />
      <area className='calves-area' alt="Calves" href="/exercises/calves" coords="76,356,119,361,152,351,162,402,160,485,72,485,67,399" shape="poly" />
    </map>
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
      this.setState({isBF: !this.state.isBF});
    }

    render() {
      return (
        <main>
          <figcaption className='captionChoose'> Choose the body part you want </figcaption>
          <div className='images'>

            {this.state.isBF ? BodyFrontImg : BodyBackImg} 

            <figure className='icon' onClick={() => this.changeImage()}>
              <img src={this.state.isBF ? BBicon : BFicon} alt={this.state.isBF ? 'Click to show body back' : 'Click to show body front'} />
              <figcaption className='captionFlip'> {this.state.isBF ? 'Back' : 'Front'} </figcaption>
            </figure>            
          </div>
        </main>
      );
    }
}


export default BodyPart;