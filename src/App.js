import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Exercise from "./components/exercise"
import exerciseCategory from "./components/exerciseCategory";
import About from "./components/About";

export default function App() {
  return (
    <Router> {/*parent*/}
      <div>{/*child*/}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <link to="/exercise">Exercise</link>
            </li>
            <li>
              <Link to="/exerciseCategory">ExerciseCategory</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/exercise">
            <Exercise />
          </Route>
          <Route path="/exerciseCategory">
            <ExerciseCategory />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div> {/*child*/}
    </Router>//parent 
  );
}
