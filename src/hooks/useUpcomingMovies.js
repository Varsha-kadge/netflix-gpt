import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcoming } from '../Utils/MoviesSlice';
import upcomingMovies from '../Utils/Upcoming.json';

const useUpcomingMovies = () => {
  // Fetch data from TMDP API and update store
  const upcoming = useSelector((store) => store.movies.upcomingMovies);

  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/upcoming?page=1',
    //   API_OPTIONS
    // )
    // const json = await data.json();
    const json = upcomingMovies;
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    !upcoming && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
