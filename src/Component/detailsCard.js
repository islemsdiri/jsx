import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";

export const DetailsCard = ({ match, moviesCard }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(MovieCard.find((el) => el.id === +match.params.id));
  });
  return (
    <div>
      <div>
        <span>{movie.name}</span>
        <span>{movie.description}</span>
      </div>
    </div>
  );
};
