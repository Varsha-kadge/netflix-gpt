import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainConainer from './MainConainer';
import SecondaryContainer from './SecondaryContainer';
import usePopulerMovies from '../hooks/usePopulerMovies';
import useTopratedMovies from '../hooks/useTopRated.movies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopulerMovies();
  useTopratedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainConainer />
      <SecondaryContainer />
      {/*
        Main vedio container
         - VideoBackground
         - Vido Titel
        Secondary Container
         - Movie List * n
           - cards * n
      */}
    </div>
  );
};
export default Browse;
