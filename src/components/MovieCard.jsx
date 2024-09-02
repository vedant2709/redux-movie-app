import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  // console.log(data);
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="bg-[#1a242f] h-[25vw] hover:shadow-lg hover:brightness-125 transition-all duration-300 cursor-pointer ml-4">
        <div className="h-[70%] bg-blue-500 w-full overflow-hidden">
          <img
            src={data.Poster}
            alt="poster"
            className="h-[100%] w-full transform hover:scale-110 hover:rotate-1 transition-transform duration-300"
          />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h1 className="text-md font-semibold">{data.Title}</h1>
          <h2 className="text-sm italic">{data.Year}</h2>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
