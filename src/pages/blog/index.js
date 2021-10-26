import React from "react";
import ContentHeader from "../../layout/ContentHeader";
import BlogController from "../../controller/BlogController";
import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { render } from "@testing-library/react";

class Index extends React.Component {
  // useEffect(() => {
  //   getAllBlogs();
  // }, []);

  // const [blog, setBlog] = useState([]);
  MySwal = withReactContent(Swal);
  constructor(props) {
    super(props);
    this.state = { blog: [] };
  }

  componentDidMount() {
    this.getAllBlogs();
  }

  getAllBlogs() {
    BlogController.getAllBlogs()
      .then((res) => {
        if (res.data.status_code === 200) {
          res = res.data.data;

          this.setState({
            blog: res,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        // console.log("finally");
      });
  }

  editBlogHandler(v) {
    this.props.editBlogHandler(v);
  }

  deleteBlog(id) {
    this.MySwal.fire({
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

            this.MySwal.fire(response.result, "", "success");
            // setBlog(blog.filter((blog) => blog.id !== id));

            this.setState({
              blog: this.state.blog.filter((blog) => blog.id !== id),
            });

            // this.setState(() => ({
            //   blog: this.state.blog.filter((blog) => blog.id !== id),
            // }));
          }
        });
      }
    });
  }

  render() {
    const { match } = this.props;

    const breadcrumb = [
      // {
      //   title: "index",
      //   url: "index",
      // },
    ];

    return (
      <>
        <ContentHeader name="Blog" breadcrumb={breadcrumb} />
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">All Blog</h3>
                    <Link className="float-right" to={`${match.path}/add`}>
                      <button type="button" className="btn btn-success">
                        <i className="fas fa-plus addButton"></i>
                      </button>
                    </Link>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>Title</th>
                          <th>Slug</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.blog.map((v, k) => {
                          return (
                            <tr key={v.id}>
                              <td>{v.id}</td>
                              <td>{v.title}</td>
                              <td>{v.slug}</td>
                              <td>
                                <Link
                                  // target="_blank"
                                  // rel="noreferrer"
                                  to={`${match.path}/edit`}
                                  className="mr-3"
                                  onClick={() => this.editBlogHandler(v)}
                                  // blog={v}
                                >
                                  <i className="text-primary far fa-edit"></i>
                                </Link>

                                {/* <Link className="mr-3" to={`${match.path}/add`}> */}
                                {/* <button
                        type="button"
                        className="btn btn-success"
                      > */}
                                <i
                                  style={{ cursor: "pointer" }}
                                  className="text-danger far fa-trash-alt mr-3"
                                  onClick={() => {
                                    this.deleteBlog(v.id);
                                  }}
                                ></i>
                                {/* </button> */}
                                {/* </Link> */}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      {/* <tfoot>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Action</th>
            </tr>
          </tfoot> */}
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </>
    );
  }
}
export default withRouter(Index);
