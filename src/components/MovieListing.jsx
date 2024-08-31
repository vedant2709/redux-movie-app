import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function MovieListing() {
  const movies = useSelector((state) => state.movies.movies);
  // console.log(movies);
  return (
    <div className="movie-wrapper text-white px-[40px]">
      <h2 className="text-center text-4xl font-semibold">Movies</h2>
      <div className="movie-list grid grid-cols-5 gap-4 py-5">
        {movies.Response === "True" ? (
          movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))
        ) : (
          <div className="">
            <h3>{movies.Error}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieListing;
