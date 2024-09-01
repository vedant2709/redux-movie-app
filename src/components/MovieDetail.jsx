import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncMovieOrShowDetail } from "../features/movies/movieSlice";
import { removeSelectedMovieOrShow } from "../features/movies/movieSlice";

function MovieDetail() {
  const dispatch = useDispatch();
  const { imdbID } = useParams();

  const data = useSelector((state) => state.movies.selectedMovieOrShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section px-[40px] w-full flex py-8">
      {Object.keys(data).length === 0 ? (
        <div className="text-white">...Loading</div>
      ) : (
        <>
          <div className="left w-[75%]">
            <h1 className="text-4xl text-white font-medium">{data.Title}</h1>
            <div className="movie-rating text-[#79b8f3] text-sm flex pt-6 gap-6">
              <h2>
                IMDB Rating <i className="fa-solid fa-star text-yellow-400"></i>{" "}
                : {data.imdbRating}
              </h2>
              <h2>
                IMDB Votes <i className="fa-solid fa-thumbs-up text-white"></i>{" "}
                : {data.imdbVotes}
              </h2>
              <h2>
                Runtime <i className="fa-solid fa-film text-white"></i> :{" "}
                {data.Runtime}
              </h2>
              <h2>
                Year{" "}
                <i className="fa-solid fa-calendar-days text-yellow-200"></i> :{" "}
                {data.Year}
              </h2>
            </div>
            <div className="plot-section pt-6 w-[90%]">
              <p className="text-white text-sm leading-5 tracking-wider">
                {data.Plot}
              </p>
            </div>
            <div className="pt-6 text-md flex">
              <div className="flex flex-col w-[8vw] gap-2 font-semibold text-white">
                <h3>Director</h3>
                <h3>Stars</h3>
                <h3>Generes</h3>
                <h3>Languages</h3>
                <h3>Awards</h3>
              </div>
              <div className="flex flex-col min-w-[20vw] gap-2 text-[#79b8f3]">
                <h3>{data.Director}</h3>
                <h3>{data.Actors}</h3>
                <h3>{data.Genre}</h3>
                <h3>{data.Language}</h3>
                <h3>{data.Awards}</h3>
              </div>
            </div>
          </div>
          <div className="right w-[25%] h-[400px]">
            <img
              src={data.Poster}
              alt="Poster"
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
