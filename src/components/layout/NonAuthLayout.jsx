import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";

const NonAuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      alert("이미로그인 되어있습니다");
      navigate("/");
    }
  }, []);
  return (
    <div>
      <h1>Non Auth Layout</h1>
      <p>로그인이 반드시 안되어있어야 하는 페이지</p>
      <Navigation />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NonAuthLayout;
