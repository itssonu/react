import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
// import Home from "../pages/Home";
// import Home2 from "../pages/Home2";
import CrudIndex from "../pages/crud/index";

const AdminRoutes = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/dashboard`} exact>
          <h1>Admin Dashboard</h1>
        </Route>
        <Route path={`${path}`} exact>
          <h1>Admin Dashboard</h1>
        </Route>
        <Route path={`${path}/crud`} exact>
          <CrudIndex />
        </Route>
        <Route>
          <h1>Admin Not Found</h1>
        </Route>
      </Switch>
    </>
  );
};
export default AdminRoutes;
