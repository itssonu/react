import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Home2 from "./pages/Home2.js";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/acsd">
          <Home2 />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
