import ContentHeader from "../../layout/ContentHeader";
import { useRef, useState } from "react";

const Edit = (props) => {
  console.log(props);
  const slugRef = useRef(props.blog.slug);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const [errors, setErrors] = useState({
    slug: "",
    title: "",
    description: "",
  });

  // console.log(slugRef);

  const breadcrumb = [
    // {
    //   title: "index",
    //   url: "index",
    // },
  ];

  const editBlogFormHandler = (e) => {
    e.preventDefault();
    if (validateForm(errors)) {
      const editBlogFormData = {
        id: props.blog.id,
        title: titleRef.current.value,
        slug: slugRef.current.value,
        description: descriptionRef.current.value,
      };

      props.editBlog(editBlogFormData);
    } else {
      console.error("Invalid Form");
    }
  };

  //validate form
  const formChangeHandler = (e) => {
    let name = e.target.name;
    let value = eval(name + "Ref").current.value;

    // console.log(name, value);
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

  const validateForm = () => {
    let valid = true;
    // {
    //   Object.keys(errors).forEach((val) => {
    //     let key = val;
    //     let value = errors[key];
    //     console.log(`${key} : ${value}`);
    //   });
    //   return valid;
    // }
    {
      if (titleRef.current.value.length < 1) {
        valid = false;
        setErrors((prevState) => ({
          ...prevState,
          ["title"]: "title is required",
        }));
      }
    }

    {
      if (slugRef.current.value.length < 1) {
        valid = false;
        setErrors((prevState) => ({
          ...prevState,
          ["slug"]: "slug is required",
        }));
      }
    }

    {
      if (descriptionRef.current.value.length < 1) {
        valid = false;
        setErrors((prevState) => ({
          ...prevState,
          ["description"]: "description is required",
        }));
      }
    }

    return valid;
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
                        name="title"
                        onChange={formChangeHandler}
                        className={`form-control ${
                          errors.title.length > 0 && "is-invalid"
                        }`}
                        id=""
                        placeholder="Enter Title"
                        ref={titleRef}
                        defaultValue={props.blog.title}
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
                        onChange={formChangeHandler}
                        className={`form-control ${
                          errors.slug.length > 0 && "is-invalid"
                        }`}
                        placeholder="Enter slug"
                        defaultValue={props.blog.slug}
                        ref={slugRef}
                      />
                      {errors.slug.length > 0 && (
                        <span className="invalid-feedback">{errors.slug}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Description :</label>
                      <textarea
                        onChange={formChangeHandler}
                        className={`form-control ${
                          errors.description.length > 0 && "is-invalid"
                        }`}
                        name="description"
                        ref={descriptionRef}
                        defaultValue={props.blog.description}
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
export default Edit;
