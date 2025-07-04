import { useSelector } from 'react-redux';
import lang from '../Utils/languageConstant';
const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12'>
        <input
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[languageKey].gptSearchPlaceholde}
        />
        <button className='px-4 col-span-3 m-4 bg-red-800 text-white rounded-lg'>
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
