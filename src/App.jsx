import React from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Movie from "./Components/Movie";
import { useState } from "react";
const App = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchMovies, setsearchMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
       const res = await fetch(
      `http://www.omdbapi.com/?apikey=bed4eb24&s=${searchMovies}`
    );
      const data = await res.json();
      setAllMovies(data.Search);
      console.log(data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className="bg">
        <Search
          searchMovies={searchMovies}
          setsearchMovies={setsearchMovies}
          fetchData={fetchData}
        />
        <Movie allMovies={allMovies} loading={loading} />
      </div>
    </div>
  );
};

export default App;
