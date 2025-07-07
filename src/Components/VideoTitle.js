const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 w-screen aspect-video px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black font-bold text-lg p-3 px-12 rounded-md hover:bg-opacity-80'>
          ▶ Play
        </button>
        <button className='bg-gray-500 ml-2 text-white font-bold text-lg p-3 px-12 bg-opacity-50 hover:bg-opacity-30 rounded-md'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
