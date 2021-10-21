import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogIndex from "../pages/blog/index";

const AdminRoutes = (props) => {
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
        <Route path={`${path}/blog`} exact>
          <BlogIndex isBlogMenuClicked={props.isBlogMenuClicked} />
        </Route>
        <Route>
          <h1>Admin Not Found</h1>
        </Route>
      </Switch>
    </>
  );
};
export default AdminRoutes;
