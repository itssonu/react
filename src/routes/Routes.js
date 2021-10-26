import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout.js";
import WebLayout from "../layout/WebLayout.js";
import AdminRoutes from "./AdminRoutes.js";
import WebRoutes from "./WebRoutes.js";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/admin">
            <AdminLayout>
              <AdminRoutes />
            </AdminLayout>
          </Route>

          <Route path="/">
            <WebLayout>
              <WebRoutes />
            </WebLayout>
          </Route>
          <Route>
            <h1>web not found</h1>
          </Route>
        </Switch>
      </>
    );
  }
}
export default Routes;
