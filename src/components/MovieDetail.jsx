import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail } from '../features/movies/movieSlice';

function MovieDetail() {
  const dispatch=useDispatch();
  const {imdbID}=useParams();

  const data=useSelector((state)=>state.movies.selectedMovieOrShow)
  console.log(data)

  useEffect(()=>{
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
  },[dispatch,imdbID])
  return (
    <div>
      
    </div>
  )
}

export default MovieDetail
