import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../redux/slices/saved-slice";

const MovieItem = ({ title, poster_path, vote_average, original_language, id }) => {
  const saved = useSelector((state) => state.saved.value)
  const dispatch = useDispatch();
  
  const navigate = useNavigate()
  return (
    <div className="rounded-xl relative">
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
      <button
        onClick={() => dispatch(addMovie({ id, title, poster_path, vote_average, original_language }))}
        className="absolute top-3 right-3 text-3xl text-[#C61F1F]"
      >
        {saved?.some((item) => item.id === id) ? (
          <FaBookmark />
        ) : (
          <FaRegBookmark />
        )}
      </button>
    </div>
  );
};

export default memo(MovieItem);
