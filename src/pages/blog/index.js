import ContentHeader from "../../layout/ContentHeader";
import BlogController from "../../controller/BlogController";
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Index = (props) => {
  let match = useRouteMatch();
  const breadcrumb = [
    // {
    //   title: "index",
    //   url: "index",
    // },
  ];

  const deleteBlog = (id) => {
    props.deleteBlog(id);
  };

  const getAllBlogs = () => {
    BlogController.getAllBlogs()
      .then((res) => {
        if (res.data.status_code === 200) {
          res = res.data.data;
          setBlog(res);
        }
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => {
        console.log("finally");
      });
  };
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

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
                      {blog.map((v, k) => {
                        return (
                          <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            <td>{v.slug}</td>
                            <td>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://dev.01s.in/dcad/dev/public/admin/product/show/9"
                                className="mr-3"
                              >
                                <i className="text-primary far fa-eye"></i>
                              </a>

                              {/* <Link className="mr-3" to={`${match.path}/add`}> */}
                              {/* <button
                                  type="button"
                                  className="btn btn-success"
                                > */}
                              <i
                                style={{ cursor: "pointer" }}
                                className="text-danger far fa-trash-alt mr-3"
                                onClick={() => {
                                  deleteBlog(v.id);
                                }}
                              ></i>
                              {/* </button> */}
                              {/* </Link> */}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
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
};
export default Index;
