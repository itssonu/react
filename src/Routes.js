import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Home2 from "./pages/Home2.js";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home2" exact>
          <Home2 />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
