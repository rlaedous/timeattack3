import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: "http://localhost:4000/comments",
});

commentsAxios.interceptors.request.use(async function (config) {
  const { data } = await authApi.get("/user");
  if (data.success) return config;
});

commentsAxios.interceptors.response.use((response) => {
  return response;
});

export default commentsAxios;
