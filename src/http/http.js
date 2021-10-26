import axios from "axios";

const url =
  window.location.protocol +
  "://" +
  window.location.hostname +
  "::" +
  window.location.port;
export default axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // Origin: '"' + url + '"',
  },
});
