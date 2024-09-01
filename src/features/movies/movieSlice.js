import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";
import MovieApi from "../../common/apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";

    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    ).catch((err) => {
      console.log("Error : ", err);
    });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";

    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${seriesText}&type=movie`
    ).catch((err) => {
      console.log("Error : ", err);
    });
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await MovieApi.get(
      `?apikey=${APIKey}&i=${id}&Plot=full`
    ).catch((err) => {
      console.log("Error : ", err);
    });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow:{},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("Pending");
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("Successfull");
      state.movies = payload;
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      console.log("Successfull");
      state.shows = payload;
    });
    builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
      console.log("Successfull");
      state.selectedMovieOrShow = payload;
    });
    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("Rejected");
    });
  },
  reducers: {
    removeSelectedMovieOrShow:(state)=>{
      state.selectedMovieOrShow={};
    }
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
