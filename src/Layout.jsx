import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <div>me</div>
      <Outlet />
    </div>
  );
};
export default Layout;
