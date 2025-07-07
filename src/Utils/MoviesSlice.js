import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'Movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    populerMovies: null,
    upcomingMovies: null,
    TopRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopulerMovies: (state, action) => {
      state.populerMovies = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopulerMovies,
  addUpcoming,
  addTopRated,
} = moviesSlice.actions;
export default moviesSlice.reducer;
