import axios from "axios";

const http = axios.create({
  baseURL: "http://185.217.131.237:8000/api/v1",
});

export default http;
