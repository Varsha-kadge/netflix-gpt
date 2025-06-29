import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO } from '../Utils/Constant';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
  return (
    <div className='absolute px-8 py-2 w-screen  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 ' src={LOGO} alt='logo' />
      {user && (
        <div className='flex p-2'>
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
