import React from "react";
import Header from "./Header";
const Login = () => {
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
