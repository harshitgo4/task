import React from 'react';
import mainImage from '../images/pexels-karolina-grabowska-4218698.jpg';

const Header = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <img src={mainImage} alt="Background" className="w-full h-full object-cover blur-sm" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-6 md:p-12 lg:p-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-400 drop-shadow-lg">
          <div className="text-4xl md:text-5xl lg:text-6xl text-amber-400">
            Connect With
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl text-white p-1">
            Your Favorite Poets
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Header;
