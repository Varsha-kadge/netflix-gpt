import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MoviesSlice';
import NowPlayingMovies from '../Utils/NowPlayingMoviesAPI.json';

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
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
