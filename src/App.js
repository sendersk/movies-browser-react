import React, { useEffect, useState } from "react";
import Movie from "./components/Movie/Movie";
import { Container } from "./components/Container/styled";
import Navigation from "./components/Navigation/Navigation";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f271630baa852ad3c9f1b5da3a4d53aa&page=1";
  
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
        <Navigation />
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </Container>
    </>
  );
}

export default App;
