import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-['SUSE']">
      <Header />
      <div className="px-[40px]">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/movie/:imdbID" element={<MovieDetail/>} />
          <Route element={<PageNotFound/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
