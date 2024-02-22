import React, { useEffect, useState } from "react";

const Home = () => {
  const nickName = localStorage.getItem("nickName");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLogin(true);
    }
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>

      {/* 로그인 여부에 따라 조건부 렌더링 */}
      {isLogin ? <p>안녕하세요,{nickName}님!</p> : <p>로그인을 해주세요.</p>}
    </div>
  );
};

export default Home;
