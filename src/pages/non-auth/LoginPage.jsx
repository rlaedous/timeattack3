import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const idHandler = (e) => {
    setId(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const userData = {
            id,
            password,
          };
          const response = await authApi.post("/login", userData);
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("nickName", response.data.nickName);
          alert("로그인에 성공하였습니다. 메인 페이지로 이동할게요");
          console.log(response);
          navigate("/");
        }}
      >
        <div>
          <label htmlFor="id">id</label>
          <input value={id} onChange={idHandler} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={passwordHandler} />
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
