import MovieCard from './MovieCard';
const MovieList = ({ title, movies }) => {
  return (
    <div className='px-6'>
      <h1 className='font-bold text-3xl py-3 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
