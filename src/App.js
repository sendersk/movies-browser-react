import React from "react"
import Movie from "./components/Movies/Movie"

function App() {
  const movies = ['1', '2', '3'];

  return (
    <div>
      {movies.map(movie => (<Movie />))}
    </div>
  );
}

export default App;
