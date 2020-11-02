import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Start from './components/Start';
import About from './components/About';
import Exercises from './components/Exercises';
import BodyPart from './components/BodyPart';


function App() {
  return (
    <Router> 
      <div className="App">
    
        <Switch>
          <Route exact path='/'>
            <Start />
          </Route>  

          <Route path='/about'>
            <Navbar />
            <About />
            <Footer />
          </Route> 

          <Route path='/bodypart'>
            <Navbar />
            <BodyPart />
            <Footer />
          </Route> 

          <Route path='/exercises'>
            <Navbar />
            <Exercises />
            <Footer />
          </Route>       
        </Switch>

      </div>
    </Router>
  );
}

export default App;
