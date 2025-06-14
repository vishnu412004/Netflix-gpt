import React from "react";
import MovieCards from "./MovieCards";

const MovieLists = ({ title, movies }) => {
  // console.log(movies)
  return (
    <div>
      <h1 className="text-3xl font-bold md:px-10 p-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll md:p-8 p-0 hide-scrollbar">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
