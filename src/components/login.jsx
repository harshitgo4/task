import React, { useState } from 'react';
import img from './112.png';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:flex items-center justify-center'>
        <img 
          className='object-cover max-h-[60%] max-w-[60%] shadow-lg' 
          src={img} 
          alt="Login Visual" 
        />
      </div>

      <div id='signup' className='text-black flex flex-col justify-center'>
        {!isSignUp ? (
          <form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-white shadow-md'>
            <h2 className='text-4xl font-bold text-center text-gray-800'>SIGN IN</h2>
            <div className='flex flex-col text-gray-600 py-2'>
              <label>Username</label>
              <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-gray-500 focus:bg-gray-300 focus:outline-none' type="text" />
            </div>
            <div className='flex flex-col text-gray-600 py-2'>
              <label>Password</label>
              <input className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-gray-500 focus:bg-gray-300 focus:outline-none' type="password" />
            </div>
            <div className='flex justify-between text-gray-600 py-2'>
              <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
              <p className='cursor-pointer hover:underline'>Forgot Password</p>
            </div>
            <button className='w-full my-5 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800'>SIGN IN</button>
            <p className='text-center text-gray-600'>
              New User?{' '}
              <span  onClick={toggleSignUp} className='text-black cursor-pointer hover:underline'>
                Sign Up
              </span>
            </p>
          </form>
        ) : (
          <form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-white shadow-md'>
            <h2 className='text-4xl font-bold text-center text-gray-800'>SIGN UP</h2>
            <div className='flex flex-col text-gray-600 py-2'>
              <label>Username</label>
              <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-gray-500 focus:bg-gray-300 focus:outline-none' type="text" />
            </div>
            <div className='flex flex-col text-gray-600 py-2'>
              <label>Email</label>
              <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-gray-500 focus:bg-gray-300 focus:outline-none' type="email" />
            </div>
            <div className='flex flex-col text-gray-600 py-2'>
              <label>Password</label>
              <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-gray-500 focus:bg-gray-300 focus:outline-none' type="password" />
            </div>
            <button className='w-full my-5 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800'>SIGN UP</button>
            <p className='text-center text-gray-600'>
              Already have an account?{' '}
              <span onClick={toggleSignUp} className='text-black cursor-pointer hover:underline'>
                Sign In
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
