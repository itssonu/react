import ContentHeader from "../../layout/ContentHeader";
import { useRef, useState } from "react";

const Add = (props) => {
  const slugRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [errors, setErrors] = useState({
    slug: "",
    title: "",
    description: "",
  });
  // console.log([title]);
  const breadcrumb = [
    // {
    //   title: "index",
    //   url: "index",
    // },
  ];

  const addBlogFormHandler = (e) => {
    e.preventDefault();

    //validate o submit

    const addBlogFormData = {
      title: titleRef.current.value,
      slug: slugRef.current.value,
      description: descriptionRef.current.value,
    };

    props.addBlog(addBlogFormData);

    titleRef.current.value = "";
    slugRef.current.value = "";
    descriptionRef.current.value = "";
  };

  //validate form
  const validateCmsAddForm = (e) => {
    let name = e.target.name;
    let value = eval(name + "Ref").current.value;

    console.log(name, value);
    switch (name) {
      case "title":
        // alert(title);
        if (value.length == 0) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "title is required",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "",
          }));
        }

        break;

      case "description":
        // alert(value.length);
        if (value.length == 0) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "description is required",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "",
          }));
        }

        break;
      case "slug":
        // alert(value.length);
        if (value.length == 0) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "slug is required",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "",
          }));
        }

        break;

      default:
    }
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
                        name="title"
                        onChange={validateCmsAddForm}
                        className={`form-control ${
                          errors.title.length > 0 && "is-invalid"
                        }`}
                        id=""
                        placeholder="Enter Title"
                        ref={titleRef}
                      />
                      {errors.title.length > 0 && (
                        <span className="invalid-feedback">{errors.title}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Slug</label>
                      <input
                        type="text"
                        name="slug"
                        onChange={validateCmsAddForm}
                        className={`form-control ${
                          errors.slug.length > 0 && "is-invalid"
                        }`}
                        placeholder="Enter slug"
                        ref={slugRef}
                      />
                      {errors.slug.length > 0 && (
                        <span className="invalid-feedback">{errors.slug}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Description :</label>
                      <textarea
                        name="description"
                        onChange={validateCmsAddForm}
                        className={`form-control ${
                          errors.description.length > 0 && "is-invalid"
                        }`}
                        name="description"
                        ref={descriptionRef}
                      />
                      {errors.description.length > 0 && (
                        <span className="invalid-feedback">
                          {errors.description}
                        </span>
                      )}
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
