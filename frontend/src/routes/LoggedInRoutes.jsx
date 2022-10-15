import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";

export const LoggedInRoutes = () => {
  const { user } = useSelector((state) => ({ ...state }));
  console.log(user, "user");
  return user ? <Outlet /> : <Login />;
};
