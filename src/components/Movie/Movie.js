import React from "react";
import { Wrapper, Image, Info, Header } from "./styled";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <Wrapper>
        <Image src={IMG_API + poster_path} alt={title} />
        <Info>
          <Header>{title}</Header>
          <span>{vote_average}</span>
        </Info>
    </Wrapper>
  );
}

export default Movie;
