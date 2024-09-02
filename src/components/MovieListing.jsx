import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Error from "./Error";
import Slider from "react-slick";
import { Settings } from "../common/settings";

function MovieListing() {
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);
  // console.log(shows);
  return (
    <div className="movie-wrapper text-white px-[40px]">
      {shows.Response === "False" ? (
        <Error />
      ) : (
        <>
          <h2 className="text-4xl font-semibold pt-6">Movies</h2>
          <div className="movie-list py-5">
            <Slider {...Settings}>
              {movies.Response === "True" ? (
                movies.Search.map((movie, index) => (
                  <MovieCard key={index} data={movie} />
                ))
              ) : (
                <></>
              )}
            </Slider>
          </div>
          <h2 className="text-4xl font-semibold">Shows</h2>
          <div className="movie-list py-5">
            <Slider {...Settings}>
              {shows.Response === "True" ? (
                shows.Search.map((show, index) => (
                  <MovieCard key={index} data={show} />
                ))
              ) : (
                <></>
              )}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieListing;
