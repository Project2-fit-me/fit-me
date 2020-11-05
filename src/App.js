import React from 'react';
import {withRouter} from 'react-router';

import {
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Start from './components/Start';
import About from './components/About';
import Exercises from './components/Exercises';
import BodyPart from './components/BodyPart';


function App({location}) {
  return (
      <div className="App">

        {/* the Navbar component is not present in the Home page */}
        {location.pathname!=='/' && <Navbar />}
        
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/bodypart' component={BodyPart} />
          <Route path='/exercises/:bodypart' component={Exercises} />
          <Route path='/' component={Start} />
        </Switch>
        
        {/* the Footer component is not present in the Home page */}
        {location.pathname!=='/' && <Footer />}
        
      </div>
  );
}


/* Exporting "App" wrapped inside higher order component "withRouter" makes {location} available as props
   and all components inside App (even those not rendered with Route) to have access to 
   this.props.history, making those components able to redirect a user */
export default withRouter(App);
