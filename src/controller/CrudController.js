import http from "../http/http";

class CrudController {
  home() {
    return http.get("/home");
  }
}

export default new CrudController();
