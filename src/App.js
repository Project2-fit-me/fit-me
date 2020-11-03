import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from "./Components/Start";

export default function App() {
  return (
    <Router> {/*parent*/}
      <div>{/*child*/}
        <nav>
          <ul>
            <li>
              <Link to="/"> Start </Link>
            </li>
          </ul>
            
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Router path="/">
            <Start />
          </Router>
        </Switch>
      </div> {/*child*/}
    </Router>//parent 
  );
}
