import ContentHeader from "../../layout/ContentHeader";
import { useRef } from "react";

const Add = (props) => {
  const slugRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const breadcrumb = [
    // {
    //   title: "index",
    //   url: "index",
    // },
  ];

  const addBlogFormHandler = (e) => {
    e.preventDefault();

    const addBlogFormData = {
      title: titleRef.current.value,
      slug: slugRef.current.value,
      description: descriptionRef.current.value,
    };

    console.log(addBlogFormData);
    props.addBlog(addBlogFormData);

    titleRef.current.value = "";
    slugRef.current.value = "";
    descriptionRef.current.value = "";
  };
  return (
    <>
      <ContentHeader name="Add Blog" breadcrumb={breadcrumb} />
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Add Blog</h3>
                  {/* <Link className="float-right" to={`${match.path}/add`}>
                    <button type="button" className="btn btn-success">
                      <i className="fas fa-plus addButton"></i>
                    </button>
                  </Link> */}
                </div>
                {/* /.card-header */}
                <form method="post" onSubmit={addBlogFormHandler}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter Title"
                        ref={titleRef}
                      />
                    </div>

                    <div className="form-group">
                      <label>Slug</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter slug"
                        ref={slugRef}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description :</label>
                      <textarea
                        className="form-control"
                        name="description"
                        ref={descriptionRef}
                      />
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
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
export default Add;
