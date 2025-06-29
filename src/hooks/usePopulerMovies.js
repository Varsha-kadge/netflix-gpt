import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addPopulerMovies } from '../Utils/MoviesSlice';
import populerMovies from '../Utils/Populer.json';

const usePopulerMovies = () => {
  // Fetch data from TMDP API and update store
  const dispatch = useDispatch();

  const getPopulerMovies = async () => {
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/populer?page=1',
    //   API_OPTIONS
    // )
    // const json = await data.json();
    const json = populerMovies;
    dispatch(addPopulerMovies(json.results));
  };
  useEffect(() => {
    getPopulerMovies();
  }, []);
};

export default usePopulerMovies;
