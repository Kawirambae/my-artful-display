
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Loise Kawira Mbae</p>
            <p className="text-sm text-gray-400">Nuclear Geologist</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Loise Kawira Mbae. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              Made with passion for geology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
