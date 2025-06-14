import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  if (!movieNames) return null;
  return (
    <div className="p-4 m-10 bg-black text-white bg-opacity-80">
      {movieNames.map((movieName, index) => (
        <MovieLists
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
