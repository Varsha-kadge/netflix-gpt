import { API_OPTIONS } from '../Utils/Constant';
import nowPlayingVideo from '../Utils/NowPlayingVideo.json';
import { addTrailerVideo } from '../Utils/MoviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const trailerData = useSelector((store) => store.movies.trailerVideo);

  //fetch trailer vedio
  const getMovieVideos = async () => {
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/"+movieID+"/video?Language=en-US',
    //   API_OPTIONS
    // );
    // const json = await data.json();
    const json = nowPlayingVideo;
    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerData && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
