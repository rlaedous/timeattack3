import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: { "Content-Type": "application/json" },
});

// authApi.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   const response = authApi("/user", {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   if (!response.data.success) {
//     alert("인증이 필요합니다.");
//     return Promise.reject("인증이 필요합니다.");
//   }
//   return config;
// });
