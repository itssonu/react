import axios from "axios";

export default axios.create({
  baseURL: "https://dev.01s.in/babaChicken/dev/public/api",
  headers: {
    "Content-type": "application/json",
  },
});
