import React, { useEffect } from "react";

const Genre = ({
  searchParams,
  setSearchParams,
  data,
  setSelectedGenre,
  selectedGenre,
  setPage,
}) => {
  const handleChange = (id) => {
    const params = new URLSearchParams(searchParams);
    setPage(1);
    params.set("page", "1");
    setSearchParams(params);
    if (selectedGenre.includes(id)) {
      setSelectedGenre((prev) =>
        prev.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedGenre((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    if (selectedGenre.length) {
      const params = new URLSearchParams(searchParams);
      // params.set("page", "1")
      params.set("genres", selectedGenre.join("-"));
      setSearchParams(params);
    } else {
      setSearchParams({});
    }
  }, [selectedGenre]);

  return (
    <div className="container flex gap-3 overflow-auto p-5">
      {data?.map((item) => (
        <div
          onClick={() => handleChange(item.id)}
          key={item.id}
          className={`whitespace-nowrap p-2 border border-[#C61F1F] text-white rounded-md hover:cursor-pointer select-none ${
            selectedGenre.includes(item.id) ? "bg-[#C61F1F]" : ""
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Genre;
