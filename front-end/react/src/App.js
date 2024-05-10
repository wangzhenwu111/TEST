import React from "react";
import RouterConfig from "./router/index";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <RouterConfig />
      {
        <Outlet />
      }
    </>
  );
}