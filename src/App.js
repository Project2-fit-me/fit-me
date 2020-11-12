import React from 'react';
import {withRouter} from 'react-router';

import {Switch, Route, Redirect} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Start from './components/Start';
import About from './components/About';
import Exercises from './components/Exercises';
import BodyPart from './components/BodyPart';
import ExercisesHeader from './components/exercises-children/ExercisesHeader';


const App = ({location}) => (

      <div className="App">

        {/* the Navbar component is only present in 3 routes */}
        {location.pathname !== '/' && <Navbar />}
        {location.pathname == '/exercises' && <ExercisesHeader />}
        <Switch>

          <Route exact path='/' component={Start} />

          <Route exact path='/about' component={About} />
          <Redirect from='/about/:id' to='/about' />

          <Route exact path='/bodypart' component={BodyPart} />
          <Redirect from='/bodypart/:id' to='/bodypart' />

          <Route exact path='/exercises/:bodypart' component={Exercises} />

          <Redirect from='/exercises/:bodypart/:id' to='/exercises/:bodypart' />

          {/* this redirect needs to be here because the "from=" is not exact */}
          <Redirect from='/exercises' to='/bodypart' />

          {/* in case the user types anything else in the address bar */}
          <Redirect to='/' />

        </Switch>
        
        {/* the Footer component is only present in 3 routes */}
        {location.pathname !== '/' && <Footer />}
        
      </div>
);

/* Exporting "App" wrapped inside higher order component "withRouter" makes {location} available as props
   and all components inside App (even those not rendered with Route) to have access to 
   this.props.history, making those components able to redirect a user */
export default withRouter(App);
