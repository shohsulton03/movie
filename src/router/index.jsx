import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import React from "react";
import { useRoutes } from "react-router-dom";
import Details from "../pages/details/Details";
import Layout from "../pages/layout/Layout";
import Movies from "../pages/movies/Movies";
import Saved from "../components/saved/Saved";
import Search from "../pages/search/Search";

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
              path: "/saved",
              element: <Saved />,
            },
            {
              path: "/search",
              element: <Search />,
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
