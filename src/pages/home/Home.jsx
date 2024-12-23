import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
import Movies from "@/components/movies/Movies";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import Loading from "../loading/Loading";

const Home = () => {
  const { data, isLoading, isError, error, isPending } = useQuery({
    queryKey: ["movies"],
    queryFn: () => request.get("/discover/movie").then((res) => res.data),
  });

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <div>Error: {error?.message || "Something went wrong!"}</div>;
  }

  

  return (
    <div className="bg-black">
      <Carousel data={data} />
      <Movies data={data} />
    </div>
  );
};

export default memo(Home);
