import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MoviesSlice';
import NowPlayingMovies from '../Utils/NowPlayingMoviesAPI.json';

const useNowPlayingMovies = () => {
  // Fetch data from TMDP API and update store
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/now_playing?page=1',
    //   API_OPTIONS
    // )
    // const json = await data.json();

    const json = NowPlayingMovies;
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
