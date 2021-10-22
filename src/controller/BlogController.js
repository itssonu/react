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
  editBlog(postData) {
    return http.post("/blog/", postData);
  }
}

export default new BlogController();
