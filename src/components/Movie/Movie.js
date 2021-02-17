import React from "react";
import { Wrapper, Image, Info, Header, Span, Overview } from "./styled";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <Wrapper>
      <Image src={IMG_API + poster_path} alt={title} />
      <Info>
        <Header>{title}</Header>
        <Span>{vote_average}</Span>
      </Info>
      <Overview>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </Overview>
    </Wrapper>
  );
}

export default Movie;
