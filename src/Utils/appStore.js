import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './MoviesSlice';
import GPTReducer from './GPTSlice';
import ConfigReducer from './ConfigSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: GPTReducer,
    config: ConfigReducer,
  },
});
export default appStore;
