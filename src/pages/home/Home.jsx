import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
import Movies from "@/components/movies/Movies";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => request.get("/discover/movie").then((res) => res.data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
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
