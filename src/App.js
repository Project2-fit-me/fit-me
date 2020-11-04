import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from "./Components/Start";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About/About";

export default function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          {" "}
          {/*parent*/}
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
