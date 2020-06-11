import axios from "axios";

const baseUrl = "http://locaalhost:3000";
const api = axios.create({
  baseUrl: baseUrl,
});

export default api;
