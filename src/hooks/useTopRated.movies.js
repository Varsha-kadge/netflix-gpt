import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRated } from '../Utils/MoviesSlice';
import topRatedMovies from '../Utils/TopRated.json';

const useTopratedMovies = () => {
  // Fetch data from TMDP API and update store
  const topRated = useSelector((store) => store.movies.TopRatedMovies);

  const dispatch = useDispatch();

  const getTopratedMovies = async () => {
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/topRated?page=1',
    //   API_OPTIONS
    // )
    // const json = await data.json();
    const json = topRatedMovies;
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    !topRated && getTopratedMovies();
  }, []);
};

export default useTopratedMovies;
