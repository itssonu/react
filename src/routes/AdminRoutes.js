import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogIndex from "../pages/blog/index";
import BlogAdd from "../pages/blog/Add";
import BlogController from "../controller/CrudController";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { useState } from "react";

const AdminRoutes = (props) => {
  let { path } = useRouteMatch();

  // const [blogs, setBlogs] = useState([]);

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

  const deleteBlog = (id) => {
    MySwal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        alert(id);
        Swal.fire("Deleted Successfully", "", "success");
      }
    });
  };

  // const getAllBlogs = () => {
  //   BlogController.getAllBlogs()
  //     .then((res) => {
  //       if (res.data.status_code === 200) {
  //         res = res.data.data;
  //         // console.log(res);
  //         setBlogs(res);
  //         // return res;
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => {
  //       // console.log("finally");
  //     });
  // };
  return (
    <>
      <Switch>
        <Route path={`${path}/blog`}>
          <Route path={`${path}/blog/add`} exact>
            <BlogAdd addBlog={addBlog} />
          </Route>
          <Route path={`${path}/blog`} exact>
            <BlogIndex deleteBlog={deleteBlog} />
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
