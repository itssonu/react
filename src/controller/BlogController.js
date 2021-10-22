import http from "../http/http";

class BlogController {
  getAllBlogs() {
    return http.get("/blogs");
  }
  addBlog(postData) {
    return http.post("/addBlog", postData);
  }
  deleteBlog(blogId) {
    return http.delete("/blog/" + blogId);
  }
}

export default new BlogController();
