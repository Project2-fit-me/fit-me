import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Start from "./Components/Start";
import Main from "./Components/Main";

export default class App extends React.Component{
  
  render(){
    return (
      
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/main">
           <Main />
          </Route>
          {/* <Redirect to="/start">
         </Redirect> */}
          
         </Switch>
       
    )
  }
}
