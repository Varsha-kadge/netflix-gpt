import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import {
  addNowPlayingMovies,
  addPopulerMovies,
  addTopRated,
  addUpcoming,
} from '../Utils/MoviesSlice';
import NowPlayingMovies from '../Utils/NowPlayingMoviesAPI.json';
import populerMovies from '../Utils/Populer.json';
import topRatedMovies from '../Utils/TopRated.json';
import upcomingMovies from '../Utils/Upcoming.json';

const useNowPlayingMovies = () => {
  // Fetch data from TMDP API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/now_playing?page=1',
    //   API_OPTIONS
    // )
    // const json = await data.json();

    const json = NowPlayingMovies;
    dispatch(addNowPlayingMovies(json.results));
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/populer?page=1',
    //   API_OPTIONS
    // )
    // const json = await data.json();
    const populer = populerMovies;
    dispatch(addPopulerMovies(populer.results));

    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/topRated?page=1',
    //   API_OPTIONS
    // )
    // const json = await data.json();
    const topRated = topRatedMovies;
    dispatch(addTopRated(topRated.results));

    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/upcoming?page=1',
    //   API_OPTIONS
    // )
    // const json = await data.json();
    const upcoming = upcomingMovies;
    dispatch(addUpcoming(upcoming.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
