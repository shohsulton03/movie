import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ title, poster_path, vote_average, original_language, id }) => {
  const navigate = useNavigate()
  return (
    <div className="rounded-xl">
      <img
      onClick={() => navigate(`/movie/${id}`)}
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt=""
        className="w-[280px] h-[400px] rounded-xl"
      />
      <h3 className="bg-black text-white ">
        {title} - {original_language.toUpperCase()}
      </h3>
      <p className="bg-black text-white">{vote_average}</p>
    </div>
  );
};

export default memo(MovieItem);
