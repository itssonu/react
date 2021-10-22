import ContentHeader from "../../layout/ContentHeader";
import { useRef, useEffect } from "react";

const Edit = (props) => {
  console.log(props);
  const slugRef = useRef(props.blog.slug);

  const titleRef = useRef();
  const descriptionRef = useRef();

  // console.log(slugRef);

  const breadcrumb = [
    // {
    //   title: "index",
    //   url: "index",
    // },
  ];

  const editBlogFormHandler = (e) => {
    e.preventDefault();

    const editBlogFormData = {
      id: props.blog.id,
      title: titleRef.current.value,
      slug: slugRef.current.value,
      description: descriptionRef.current.value,
    };

    props.editBlog(editBlogFormData);
  };

  // useEffect(() => {
  //   slugRef.current.value = props.blog.slug;
  // }, []);
  return (
    <>
      <ContentHeader name="Edit Blog" breadcrumb={breadcrumb} />
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
                <form method="post" onSubmit={editBlogFormHandler}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter Title"
                        ref={titleRef}
                        defaultValue={props.blog.title}
                      />
                    </div>

                    <div className="form-group">
                      <label>Slug</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter slug"
                        defaultValue={props.blog.slug}
                        ref={slugRef}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description :</label>
                      <textarea
                        className="form-control"
                        name="description"
                        ref={descriptionRef}
                        defaultValue={props.blog.description}
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
export default Edit;
