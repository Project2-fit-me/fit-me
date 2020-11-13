import React, {Component} from 'react';
import {withRouter} from 'react-router';

import {Switch, Route, Redirect} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Start from './components/Start';
import About from './components/About';
import Exercises from './components/Exercises';
import BodyPart from './components/BodyPart';

import axios from 'axios';



class App extends Component {
  constructor(props){
    //only need to pass props to super() if one is using this.props inside constructor()
    super();
    this.state = {categories:null, res_EnImgCategory:null, loading:true};
  }

  componentDidMount() {

    axios.get('https://wger.de/api/v2/exerciseimage/?language=2')
    .then(res => {

      axios.get(`https://wger.de/api/v2/exerciseimage/?language=2&limit=${res.data.count}`)
      .then(res => this.nextRequests(res.data.results, res.data.results.map(el => el.exercise)));
    });
  }


  // res_EnImg - get exercises in english and with image (array of objects)
  // exID_EnImg -> array with exercise IDs for all those with images
  nextRequests(res_EnImg, exID_EnImg) {

    // get category ID for a specific bodypart -> categories = {Arms:8, Legs:9, etc}
    let categories = {};

    // res_EnImgCategory  - get exercises in english and with image, for a particular category
    //                    - object like {categoryID(e.g., 8): array of objects, categoryID(e.g., 9): array of objects, etc}

    axios.get('https://wger.de/api/v2/exercisecategory')
    .then(res => {

      res.data.results.forEach(el => categories = {...categories, [el.name]:el.id});
      this.setState({categories: categories}, ()=> {

        let res_EnImgCategory = {};				

        // array filled with all object values
        const categoriesValues = Object.values(this.state.categories); 	
    
        categoriesValues.forEach(el => 
          { 
            axios.get(`https://wger.de/api/v2/exercise/?language=2&category=${el}`)
            .then(res => {

              axios.get(`https://wger.de/api/v2/exercise/?language=2&category=${el}&limit=${res.data.count}`)
              .then(res => {

                res_EnImgCategory[el] = res.data.results.filter(el => exID_EnImg.includes(el.id));
        
                // adding array of image URLs to the object of each exercise
                res_EnImgCategory[el].map(el => el.images = res_EnImg.filter(elem => elem.exercise === el.id).map(elem => elem.image));
      
              });
            });
          }
        );

        this.setState({res_EnImgCategory: res_EnImgCategory}, ()=>this.setState({loading:false}));
      });

    });
  }


  render() {
    return (

      <div className="App">

        {/* the Navbar component is only present in 3 routes */}
        {this.props.location.pathname !== '/' && <Navbar />}
        
        <Switch>

          <Route exact path='/' component={Start} />

          <Route exact path='/about' component={About} />
          <Redirect from='/about/:id' to='/about' />

          <Route exact path='/bodypart' component={BodyPart} />
          <Redirect from='/bodypart/:id' to='/bodypart' />

          <Route exact path='/exercises/:bodypart' 
                 render={() => <Exercises categories={this.state.categories} results={this.state.res_EnImgCategory} />} />

          <Redirect from='/exercises/:bodypart/:id' to='/exercises/:bodypart' />

          {/* this redirect needs to be here because the "from=" is not exact */}
          <Redirect from='/exercises' to='/bodypart' />

          {/* in case the user types anything else in the address bar */}
          <Redirect to='/' />

        </Switch>
        
        {/* the Footer component is only present in 3 routes */}
        {this.props.location.pathname !== '/' && <Footer />}
        
      </div>
    );
  }
}

/* Exporting "App" wrapped inside higher order component "withRouter" makes {location} available as props
   and all components inside App (even those not rendered with Route) to have access to 
   this.props.history, making those components able to redirect a user */
export default withRouter(App);
