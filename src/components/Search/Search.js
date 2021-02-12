import React, { useState } from "react";
import { Wrapper, Input } from "./styled";

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
