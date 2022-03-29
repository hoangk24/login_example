import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
 const { isLogin, role } = useSelector((state) => state.login);
 if (isLogin) {
  if (role === 1) {
   return children;
  } else {
   return <Navigate to={"/"} />;
  }
 } else return <Navigate to={"/login"} />;
}
