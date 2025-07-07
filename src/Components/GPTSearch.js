import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestion';
import { BG_URL } from '../Utils/Constant';

const GPTSearch = () => {
  // gpt search bar
  // gpt movie suggestions
  return (
    // gpt search bar
    <div>
      <div className='-z-10 fixed'>
        <img src={BG_URL} alt='' />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GPTSearch;
