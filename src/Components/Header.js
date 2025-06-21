import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };
  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44 '
        src='
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
      />
      {user && (
        <div className='flex p-2'>
          <img
            src={user.photoURL}
            className='w-12 h-12 m-2 mt-3 rounded-2xl'
            alt='userIcon'
          />
          <button
            onClick={handleSignOut}
            className='text-white font-bold rounded-lg'>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
