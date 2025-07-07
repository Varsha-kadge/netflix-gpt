import { createSlice } from '@reduxjs/toolkit';
import reducer from './userSlice';
const GPTSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGPTSeacrh: false,
    gptMovies: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSeacrh = !state.showGPTSeacrh;
    },
    addGptMovieResult: (state, action) => {
      state.gptMovies = action.payload.tmdbMovieResults;
      state.movieNames = action.payload.movieNames;
    },
  },
});
export const { toggleGPTSearchView, addGptMovieResult } = GPTSlice.actions;
export default GPTSlice.reducer;
