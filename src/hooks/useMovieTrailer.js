import { API_OPTIONS } from '../Utils/Constant';
import nowPlayingVideo from '../Utils/NowPlayingVideo.json';
import { addTrailerVideo } from '../Utils/MoviesSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  //fetch trailer vedio
  const getMovieVideos = async () => {
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/movie/"+movieID+"/video?Language=en-US',
    //   API_OPTIONS
    // );
    // const json = await data.json();
    const json = nowPlayingVideo;
    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[2] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
