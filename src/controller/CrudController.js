import http from "../http/http";

class BlogController {
  getAllBlogs() {
    return http.get("/blogs");
  }
  addBlog(postData) {
    return http.post("/addBlog", postData);
  }
}

export default new BlogController();
