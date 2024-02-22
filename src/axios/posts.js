import axios from "axios";

const postsAxios = axios.create({
  baseURL: "http://localhost:4000/posts",
  timeout: "1.5s",
});

export default postsAxios;
