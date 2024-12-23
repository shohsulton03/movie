import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { request } from '../../api';
import Genre from '../../components/genre/Genre';
import Movie from '../../components/movies/Movies';
import Pagination from "@mui/material/Pagination";

const Movies = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);


  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    request("/genre/movie/list").then((res) => {
      setGenres(res.data.genres);
    });
  }, []);

  useEffect(() => {
    request("/discover/movie", {
      params: {
        page,
        with_genres: selectedGenre.join(","),
      },
    }).then((res) => {
      setData(res.data);
    });
  }, [page, selectedGenre]);
  
  return (
    <div className="bg-black">
      <Genre
        data={genres}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <Movie data={data} />
      <div className="flex justify-center py-6">
        <Pagination
          page={page}
          onChange={handleChange}
          count={data?.total_pages <= 500 ? data?.total_pages : 500}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff", 
              backgroundColor: "#1a1a1a", 
              border: "1px solid #ff4040", 
              "&:hover": {
                backgroundColor: "#ff4040", 
                color: "#fff", 
              },
            },
            "& .Mui-selected": {
              backgroundColor: "#ff4040", 
              color: "#fff",
              border: "1px solid #ff7373", 
              "&:hover": {
                backgroundColor: "#ff7373", 
              },
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "#ff7373", 
            },
          }}
        />
      </div>
    </div>
  );
}

export default Movies