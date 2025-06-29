import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainConainer from './MainConainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();
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
