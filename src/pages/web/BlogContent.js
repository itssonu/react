import React, { useState, useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import BlogController from "../../controller/BlogController";

export default function BlogContent() {
  let params = useParams();
  const [description, setDescription] = useState("");

  const getBlog = () => {
    BlogController.findBlogBySlug(params.slug)
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
    getBlog();
  }, []);
  return <>{description}</>;
}
