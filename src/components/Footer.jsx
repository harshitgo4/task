import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-300 w-full sm:h-[30vh] h-full p-4 flex flex-col sm:flex-row justify-around sm:items-start items-center">
      <div className="flex flex-col items-start w-full sm:w-1/5  sm:mb-0">
        <h3 className="text-2xl font-bold mb-4">Poetry Haven</h3>
        <p className="text-base text-gray-700 mb-4">
          A short text explaining why Poetry Haven is so special.
        </p>
        <p className="text-base text-gray-700">© 2024 Poetry Haven</p>
      </div>

      <div className="flex flex-col items-start mb-6 sm:mb-0">
        <h4 className="font-bold text-black text-xl mb-3">Products</h4>
        <a href="#" className="text-base text-gray-700 hover:underline">Features</a>
        <a href="#" className="text-base text-gray-700 hover:underline">Testimonials</a>
        <a href="#" className="text-base text-gray-700 hover:underline">Pricing</a>
        <a href="#" className="text-base text-gray-700 hover:underline">FAQs</a>
      </div>

      <div className="flex flex-col items-start mb-6 sm:mb-0">
        <h4 className="font-bold text-black text-xl mb-3">Resources</h4>
        <a href="#" className="text-base text-gray-700 hover:underline">Change log</a>
        <a href="#" className="text-base text-gray-700 hover:underline">Help center</a>
        <a href="#" className="text-base text-gray-700 hover:underline">Blog</a>
        <a href="#" className="text-base text-gray-700 hover:underline">Contact</a>
      </div>

      <div className="flex flex-col items-start mb-6 sm:mb-0">
        <h4 className="font-bold text-black text-xl mb-3">Others</h4>
        <a href="#" className="text-base text-gray-700 hover:underline">Privacy</a>
        <a href="#" className="text-base text-gray-700 hover:underline">Terms</a>
        <a href="#" className="text-base text-gray-700 hover:underline">Affiliation</a>
        <a href="#" className="text-base text-gray-700 hover:underline">Press</a>
      </div>

   
    </footer>
  );
}
