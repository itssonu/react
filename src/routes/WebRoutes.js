import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

import Content from "../pages/web/BlogContent";
import BlogController from "../controller/BlogController";

const WebRoutes = (props) => {
  // return <h3>Requested topic ID:</h3>;

  return (
    <>
      <Switch>
        <Route
          path="/:slug"
          //  children={<Content />}
        >
          <Content />
          {/* <h1>xsaxsacsacx</h1> */}
        </Route>
        <Route path="/">
          <h1>home</h1>
        </Route>
      </Switch>
    </>
  );
};
export default WebRoutes;
