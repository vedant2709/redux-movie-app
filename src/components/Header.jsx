import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies,fetchAsyncShows } from "../features/movies/movieSlice";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search === "") return alert("Search cannot be empty.")
    dispatch(fetchAsyncMovies(search))
    dispatch(fetchAsyncShows(search))
    setSearch("")
  };


  return (
    <div className="header bg-[#1a242f] text-white w-full h-[72px] px-[40px] flex justify-between items-center">
      <Link to={"/"}>
        <div className="logo text-2xl font-semibold">Movie App</div>
      </Link>
      <div className="search-bar bg-transparent h-[5vh]">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={search}
            placeholder="Search Movies or Shows ..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-[18vw] h-full bg-transparent placeholder:text-lg px-2 py-1 outline-none text-lg focus:border-b-[1px] focus:border-white focus:transition-all"
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass text-xl hover:text-zinc-300"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" className="w-[40px] h-[40px]" />
      </div>
    </div>
  );
}

export default Header;
