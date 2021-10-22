import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  Redirect,
  useHistory,
} from "react-router-dom";
import BlogIndex from "../pages/blog/index";
import BlogAdd from "../pages/blog/Add";
import BlogEdit from "../pages/blog/Edit";
import BlogController from "../controller/BlogController";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";

const AdminRoutes = (props) => {
  // console.log("admin routes", props);
  let { path } = useRouteMatch();

  let history = useHistory();
  console.log(history);

  // const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});

  const MySwal = withReactContent(Swal);

  const addBlog = (postData) => {
    BlogController.addBlog(postData)
      .then((response) => {
        if (response.data.status_code === 200) {
          response = response.data;
          console.log(response);
          MySwal.fire(response.result, "", "success");
          history.goBack();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBlog = (id) => {
    MySwal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // alert(id);
        BlogController.deleteBlog(id).then((response) => {
          if (response.data.status_code === 200) {
            response = response.data;
            MySwal.fire(response.result, "", "success");
            // history.push("/admin/blog");
          }
        });
      }
    });
  };

  const editBlog = (value) => {
    console.log(value);
    BlogController.editBlog(value).then((response) => {
      if (response.data.status_code === 200) {
        response = response.data;
        console.log(response);
        MySwal.fire(response.result, "", "success");
        history.goBack();
      }
    });
  };

  const editBlogHandler = (v) => {
    setBlog(v);
  };

  return (
    <>
      <Switch>
        <Route path={`${path}/blog`}>
          <Route path={`${path}/blog/add`} exact>
            <BlogAdd addBlog={addBlog} />
          </Route>
          <Route path={`${path}/blog/edit`} exact>
            <BlogEdit blog={blog} editBlog={editBlog} />
          </Route>
          <Route path={`${path}/blog`} exact>
            <BlogIndex
              deleteBlog={deleteBlog}
              editBlogHandler={editBlogHandler}
            />
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
