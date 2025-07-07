import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { gptMovies, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {movieNames.map((movie, index) => (
          <MovieList key={movie.id} title={movie} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
