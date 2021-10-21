import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogIndex from "../pages/blog/index";
import BlogAdd from "../pages/blog/Add";
import BlogController from "../controller/CrudController";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AdminRoutes = (props) => {
  let { path } = useRouteMatch();

  const MySwal = withReactContent(Swal);

  const addBlog = (postData) => {
    BlogController.addBlog(postData)
      .then((res) => {
        if (res.data.status_code === 200) {
          res = res.data.data;
          console.log(res);
          MySwal.fire({
            title: <strong>Good job!</strong>,
            html: <i>You clicked the button!</i>,
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <>
      <Switch>
        <Route path={`${path}/blog`}>
          <Route path={`${path}/blog/add`} exact>
            <BlogAdd addBlog={addBlog} />
          </Route>
          <Route path={`${path}/blog`} exact>
            <BlogIndex isBlogMenuClicked={props.isBlogMenuClicked} />
          </Route>
        </Route>
        <Route path={`${path}/dashboard`} exact>
          <h1>Admin Dashboard</h1>
        </Route>
        <Route path={`${path}`} exact>
          <h1>Admin Dashboard</h1>
        </Route>

        <Route>
          <h1>Admin Not Found</h1>
        </Route>
      </Switch>
    </>
  );
};
export default AdminRoutes;
