import React from "react";

const Genre = ({ data, setSelectedGenre, selectedGenre }) => {
  const handleChange = (id) => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre((prev) =>
        prev.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedGenre((prev) => [...prev, id]);
    }
  };
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
