import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogController from "../../controller/BlogController";

export default function BlogContent() {
  let params = useParams();
  const [description, setDescription] = useState("");

  const getBlog = (slug) => {
    BlogController.findBlogBySlug(slug)
      .then((response) => {
        // console.log(response);
        if (response.data.status_code === 200) {
          response = response.data.data;
          setDescription(response.description);
        } else if (response.data.status_code === 204) {
          response = response.data;
          setDescription(response.result);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getBlog(params.slug);
  }, [params.slug]);

  return <> <h1> {description} </h1></>;
}
