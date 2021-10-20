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

        <Route path="/admin">
          <AdminLayout>
            <AdminRoutes />
          </AdminLayout>
        </Route>
        <Route>
          <h1>web not found</h1>
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
