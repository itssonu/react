import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout.js";
import AdminRoutes from "./AdminRoutes.js";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <h1>web</h1>
        </Route>
        <Route path="/admin" exact>
          <AdminLayout>
            <AdminRoutes />
          </AdminLayout>
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
