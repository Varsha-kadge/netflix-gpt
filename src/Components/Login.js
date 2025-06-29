import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../Utils/validate';
import { auth } from '../Utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { USER_AVTAR } from '../Utils/Constant';
import { BG_URL } from '../Utils/Constant';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    // validate the form
    let isValid = checkValidData(
      email.current.value,
      password.current.value,
      !isSignIn ? name.current.value : ''
    );
    isValid !== null ? setErrorMessage(isValid) : setErrorMessage('');
    if (isValid === null) {
      //Sign-In Sign-UP
      if (isSignIn) {
        // Sign-In logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
          })
          .catch((error) => {
            var errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      } else {
        // sign-Up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            //const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: USER_AVTAR,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                // Update successful
                // ...
              })
              .catch((error) => {
                setErrorMessage(error.message);
                // An error occurred
                // ...
              }); // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            // ..
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_URL} alt='' />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-4/12 text-white p-12 absolute bg-black my-24 mx-auto right-0 left-0 bg-opacity-85 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-900 border rounded-sm border-white'
          />
        )}
        <input
          ref={email}
          type='email'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-900 border rounded-sm border-white'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-900 border rounded-sm border-white'
        />
        <p className='text-red-700 font-bold text-lg'>{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className='p-4 font-bold my-6 bg-red-80 bg-red-700 w-full rounded-lg'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignIn
            ? 'New to Netflix? Sign Up Now'
            : 'Already registered sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
