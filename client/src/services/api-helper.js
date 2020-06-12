import axios from "axios";

process.env.NODE_ENV === "production"
  ? "https://cmdblog-api.herokuapp.com/"
  : "http://localhost:3000";
const api = axios.create({
  baseUrl: baseUrl,
});

export default api;
