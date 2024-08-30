import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import MovieApi from "../common/apis/MovieApi";
import { APIKey } from "../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/movies/movieSlice";

function Home() {
  const dispatch=useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Error : ", err);
      });
      dispatch(addMovies(response.data))
    };

    fetchMovies();
  },[]);
  return (
    <div>
      <div className="banner-img text-white">Home</div>
      <MovieListing />
    </div>
  );
}

export default Home;
