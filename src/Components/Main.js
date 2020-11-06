import React from "react";
import {Switch, Route,} from "react-router-dom";
import About from "./About/About";
import BodyPart from "./BodyPart";
import Footer from "./Footer";
import Navbar from "./Navbar";




function Main() {
  return (
    <div>
      <div className="page-container">
        <div className="content-wrap">
          {/*parent*/}
         <Navbar />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/main/about">
              <About />
            </Route>
            <Route exact path="/main/bodypart">
              <BodyPart />
            </Route>
          </Switch>
         <Footer />
        </div>
      </div>
    </div>
  );
}

export default Main;
