import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Home2 from "./pages/Home2.js";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/a">
        <Home2 />
      </Route>
    </Switch>
  );
};
export default Routes;
