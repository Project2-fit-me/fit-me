import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from "./Components/Start";
import Navbar from "./Components/Navbar";
import BodyPart from "./Components/BodyPart";



export default function App() {
  return (
    <Router> {/*parent*/}
      <div>{/*child*/}
        <Navbar />
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Start />
          </Route>
          <Route path="/body-part">
            <BodyPart />
          </Route>
        </Switch>








        
      </div> {/*child*/}
    </Router>//parent 
  );
}
