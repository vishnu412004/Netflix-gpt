import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    PopularMovies : null,
    TopRated : null,
    trailerVideo : null
  },
  reducers: {
    addNowPlayingMovies : (state,action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies : (state,action) => {
      state.PopularMovies = action.payload;
    },
    addTopRated : (state,action) => {
      state.TopRated = action.payload;
    },
    addTrailerVideo : (state,action) => {
      state.trailerVideo = action.payload;
    }
  }
});


export const {addNowPlayingMovies, addPopularMovies, addTrailerVideo, addTopRated } = moviesSlice.actions
export default moviesSlice.reducer;
