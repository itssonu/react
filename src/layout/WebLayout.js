import React, { useState, useEffect } from "react";
import BlogController from "../controller/BlogController";
import { Link, useRouteMatch } from "react-router-dom";

export default function WebLayout(props) {
  let match = useRouteMatch();

  const [menu, setMenu] = useState([]);
  const getAllBlogs = () => {
    BlogController.getAllBlogs()
      .then((res) => {
        if (res.data.status_code === 200) {
          res = res.data.data;
          setMenu(res);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        // console.log("finally");
      });
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="fake_url">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {menu.map((v, k) => {
              return (
                <li className="nav-item active" key={"menuList" + k}>
                  <Link className="nav-link" to={`${match.url}${v.slug}`}>
                    {v.title}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item active">
              <Link className="nav-link" to={`${match.url}admin`}>
                admin
              </Link>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>

      <div className="container">{props.children}</div>
    </>
  );
}
