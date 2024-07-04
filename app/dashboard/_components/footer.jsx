import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm text-gray-700">
          &copy; {new Date().getFullYear()} interviewprep.AI. All rights reserved.
        </p>
        <p className="text-xs text-gray-700 mt-1">
          Crafted with ❤️ 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
