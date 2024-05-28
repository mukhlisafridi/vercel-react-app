import React from "react";

const Search = ({ searchMovies, setsearchMovies, fetchData }) => {
  return (
    <div className="main flex justify-center py-5 px-7">
      <input
        type="text"
        placeholder="search"
        className="bg-gray-200 placeholder-gray-400 px-3 py-3 outline-none text-black border-2 border-gray-500 rounded-l-lg w-80 "
        value={searchMovies}
        onChange={(e) => setsearchMovies(e.target.value)}
      />
      <button className="bg-[#40407a] px-3 py-3 text-white   rounded-r-lg border-t-2 border-r-2 border-b-2 shadow-md border-gray-500"
      onClick={fetchData}>
        Search
      </button>
    </div>
  );
};

export default Search;
