import { IMG_CDN } from '../Utils/Constant';
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className='w-48 cursor-pointer pr-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
      <img alt='Movie Card' src={IMG_CDN + posterPath} />
    </div>
  );
};
export default MovieCard;
