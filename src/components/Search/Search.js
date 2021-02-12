import React, { useState } from "react";
import { Wrapper, Input } from "./styled";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=f271630baa852ad3c9f1b5da3a4d53aa&query=";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
      setSearchTerm(e.target.value)
  }

  return (
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
  );
}

export default Search;
