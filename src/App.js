import React, { useEffect, useState } from "react";
import Movie from "./components/Movie/Movie";
import { Container } from "./components/Container/styled";
import {
  NavigationContainer,
  Wrapper,
  Input,
} from "./components/Search/styled";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f271630baa852ad3c9f1b5da3a4d53aa&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=f271630baa852ad3c9f1b5da3a4d53aa&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Container>
        <NavigationContainer>
          <Wrapper>
            <form onSubmit={handleOnSubmit}>
              <Input
                type="search"
                value={searchTerm}
                onChange={handleOnChange}
                placeholder="Search..."
              />
            </form>
          </Wrapper>
        </NavigationContainer>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </Container>
    </>
  );
}

export default App;
