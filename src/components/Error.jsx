import React from 'react';
import { Link } from 'react-router-dom';

const NoMovieFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a242f] text-white my-10">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">No Movies or Shows Found</h1>
        <p className="text-lg mb-8">Sorry, we couldn't find any movies or shows matching your search.</p>
        
      </div>
    </div>
  );
};

export default NoMovieFound;
