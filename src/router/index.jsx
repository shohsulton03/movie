import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import React from "react";
import { useRoutes } from "react-router-dom";
import Details from "../pages/details/Details";
import Layout from "../pages/layout/Layout";
import Movies from "../pages/movies/Movies";

const Router = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "movies",
              element: <Movies />,
            },
            {
              path: "latest",
              element: <Latest />,
            },
            {
              path: "/movie/:id",
              element: <Details />,
            },
            {
              path: "*",
              element: <div>404</div>,
            },
          ],
        },
      ])}
    </>
  );
};

export default Router;
