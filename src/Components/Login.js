import { useState } from 'react';
import Header from './Header';
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className='absolute'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg'
        />
      </div>
      <form className='w-4/12 text-white p-12 absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-85 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-900 border rounded-sm border-e-white'
          />
        )}
        <input
          type='email'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-900 border rounded-sm border-e-white'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-900 border rounded-sm border-white'
        />
        <button className='p-4 font-bold my-6 bg-red-80 bg-red-700 w-full rounded-lg'>
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
