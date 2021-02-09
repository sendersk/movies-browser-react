import React, { useEffect, useState } from "react";
import Movie from "./components/Movie/Movie";
import { Container } from "./components/Container/styled";
import Search from "./components/Search/Search";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f271630baa852ad3c9f1b5da3a4d53aa&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=f271630baa852ad3c9f1b5da3a4d53aa&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <Container>
        <Search />
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </Container>
    </>
  );
}

export default App;
