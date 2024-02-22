import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인x");
      navigate("/");
    }
  }, []);
  return (
    <div>
      <h1>Auth Layout</h1>
      <p>반드시 로그인이 되어있어야 하는 페이지입니다.</p>
      <Navigation />

      <main>
        {" "}
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
