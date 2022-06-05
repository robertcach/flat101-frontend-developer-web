import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false
})

http.interceptors.response.use((response) => response.data);
export default http;