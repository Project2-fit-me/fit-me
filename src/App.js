import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from "./Components/Start";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About/About";
import BodyPart from "./Components/BodyPart";

export default function App(props) {
  console.log(props);
  return (
    <div className="page-container">
      <div className="content-wrap">
        {/*parent*/}
        {location.pathname != "/start" && <Navbar />}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/body-part">
            <BodyPart />
          </Route>
        </Switch>
        {location.pathname != "/start" && <Footer />}
      </div>
    </div>
  );
}
