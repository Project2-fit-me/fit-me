import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from "./Components/Start";
import Navbar from "./Components/Navbar";
import BodyPart from "./Components/BodyPart";
import About from "./Components/About/About.js";

export default function App() {
  return (
    <Router>
      {" "}
      {/*parent*/}
      <div>
        {/*child*/}
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/body-part">
            <BodyPart />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>{" "}
      {/*child*/}
    </Router> //parent
  );
}
