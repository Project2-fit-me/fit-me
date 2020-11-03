import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <Router> {/*parent*/}
      <div>{/*child*/}
        <nav>
          <ul>

          </ul>
            
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
        </Switch>
      </div> {/*child*/}
    </Router>//parent 
  );
}
