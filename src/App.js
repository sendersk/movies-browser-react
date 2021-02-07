import React from "react";
import Movie from "./components/Movie/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f271630baa852ad3c9f1b5da3a4d53aa&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=f271630baa852ad3c9f1b5da3a4d53aa&query=";

function App() {
  const movies = ["1", "2", "3"];

  return (
    <div>
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
