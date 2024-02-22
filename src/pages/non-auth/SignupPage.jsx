import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const nicknameHandler = (e) => {
    setNickname(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // "http://localhost:3003/posts",
  return (
    <div>
      <h1>Signup</h1>
      <p>Signup page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const userData = {
            id,
            nickname,
            password,
          };
          const response = await authApi.post("/register", userData);
          alert("완료");
          console.log("response", response);
        }}
      >
        <div>
          <label htmlFor="id">id</label>
          <input value={id} onChange={idHandler} />
        </div>
        <div>
          <label htmlFor="nickname">nickname</label>
          <input value={nickname} onChange={nicknameHandler} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={passwordHandler} />
        </div>

        <button type="submit">Signup</button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하러가기
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

export default SignupPage;
