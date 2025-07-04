import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainConainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovies = movies[1];
  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainConainer;
