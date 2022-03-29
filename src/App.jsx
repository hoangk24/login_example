import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./view/admin/Admin";
import PrivateRoute from "./view/components/PrivateRoute/privateRoute";
import Home from "./view/home/Home";
import Login from "./view/login/Login";

export default function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route
     path="/admin"
     element={
      <PrivateRoute>
       <Admin />
      </PrivateRoute>
     }
    />
   </Routes>
  </BrowserRouter>
 );
}
