import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO } from '../Utils/Constant';
import { toggleGPTSearchView } from '../Utils/GPTSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/Constant';
import { addSelectedLanguage } from '../Utils/ConfigSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGPTSeacrh);
  //const defaultLang = useSelector((store) => store.config.language);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        var { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
        // ...
      } else {
        dispatch(removeUser());
        navigate('/');
        // User is signed out
        // ...
      }
    });

    // unSubscribe when component is unmount
    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };
  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
    // Toggle GPT Search button
  };
  const handleLanguageSelect = (e) => {
    dispatch(addSelectedLanguage(e.target.value));
  };
  return (
    <div className='absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 ' src={LOGO} alt='logo' />
      {user && (
        <div className='flex'>
          {showGptSearch && (
            <select
              onChange={handleLanguageSelect}
              className='px-4 pr-2 mx-2 my-2 bg-gray-900 text-white rounded-lg'>
              {SUPPORTED_LANGUAGES.map((option) => (
                <option key={option.identifier} value={option.identifier}>
                  {option.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearchClick}
            className='px-4 mx-4 my-2  bg-purple-300 rounded-lg'>
            {showGptSearch ? 'Home Page' : 'GPT Search'}
          </button>
          <img
            src={user.photoURL}
            className='w-12 h-12 m-2 mt-3 rounded-3xl'
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
