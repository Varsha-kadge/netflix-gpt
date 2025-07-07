import { useDispatch, useSelector } from 'react-redux';
import lang from '../Utils/languageConstant';
import { useRef } from 'react';
import client from '../Utils/OpenAI';
import API_OPTIONS from '../Utils/Constant';
import searchResult from '../Utils/searchResult.json';
import { addGptMovieResult } from '../Utils/GPTSlice';

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieInTMDB = async (movie) => {
    // const data = await fetch(
    //   'https://api.themoviedb.org/3/search/movie?query='+ movie + "&include_adult=false&language=en-US&page=1",
    //   API_OPTIONS
    // )
    // const json = await data.json();
    const json = searchResult;
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const gptQuery =
      'Act as a movie recommendation system and suggest some movies for the query :' +
      searchText.current.value +
      ' only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Shole, Don, Golmal, Koi mil gya';
    // Make an API call to openAI API and get movie results
    const gptResults = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: gptQuery }],
    });
    if (!gptResults.choices) {
      // Todo Error Handling.
    }
    const gptMovies = gptResults.choices?.[0]?.message.content.split(',');

    const data = gptMovies.map((movie) => searchMovieInTMDB(movie));
    const tmdbResults = await Promise.all(data);
    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        tmdbMovieResults: tmdbResults,
      })
    );
    // for Each movies call TMDB API to search movie
  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form
        className='bg-black w-1/2 grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[languageKey].gptSearchPlaceholde}
        />
        <button
          onClick={handleGptSearchClick}
          className='px-4 col-span-3 m-4 bg-red-800 text-white rounded-lg'>
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
