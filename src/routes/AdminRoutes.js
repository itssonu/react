import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../pages/Home";
import Home2 from "../pages/Home2";

const AdminRoutes = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/dashboard`} exact>
          <Home />
        </Route>
        <Route path={`${path}/crud`} exact>
          <Home2 />
        </Route>
        {/* <Route>
          <Home />
        </Route> */}
      </Switch>
    </>
  );
};
export default AdminRoutes;
