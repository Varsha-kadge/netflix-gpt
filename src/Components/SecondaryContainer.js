import { useSelector } from 'react-redux';
import MovieList from './MovieList';
const SecondaryContainer = () => {
  const Movies = useSelector((store) => store.movies);
  const Populer = useSelector((store) => store.movies);
  const topRated = useSelector((store) => store.movies);
  const upcoming = useSelector((store) => store.movies);

  return (
    Movies.nowPlayingMovies !== null && (
      <div className='bg-black'>
        <div className='-mt-96 relative z-2 pl-12'>
          <MovieList title={'Now Playing'} movies={Movies.nowPlayingMovies} />
          <MovieList title={'Populer'} movies={Populer.populerMovies} />
          <MovieList title={'Top Rated'} movies={topRated.TopRatedMovies} />
          <MovieList title={'Upcoming'} movies={upcoming.upcomingMovies} />

          {/*
      MoveList - Populer
      MoveList - Now Playing
      MoveList - Trending
      MoveList - Horror
      MoveList - Dcumentries

      
    */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
