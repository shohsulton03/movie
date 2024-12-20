import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import React from "react";
import { useRoutes } from "react-router-dom";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "latest",
      element: <Latest />,
    },
  ]);
};

export default Router;
