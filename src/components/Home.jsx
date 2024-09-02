import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../features/movies/movieSlice";

function Home() {
  const dispatch=useDispatch();
  
  useEffect(() => {
    const movieText="Harry"
    const showText="Friends"
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  },[dispatch]);
  return (
    <div>
      {/* <div className="banner-img text-white">Home</div> */}
      <MovieListing />
    </div>
  );
}

export default Home;
