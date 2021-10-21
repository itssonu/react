import http from "../http/http";

class CrudController {
  getAllBlogs() {
    return http.get("/blogs");
  }
}

export default new CrudController();
