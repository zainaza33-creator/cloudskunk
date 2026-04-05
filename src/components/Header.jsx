import React from 'react';

const Header = ({ showAuth }) => {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-green-500/30 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with hover effect */}
        <a href="#home" className="flex items-center space-x-3 group">
          <img 
            src="/public/assets/cloudskunk logo.png" 
            alt="CloudSkunk" 
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
          />
          <div className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Cloud</span>
            <span className="text-white">Skunk</span>
          </div>
        </a>
        
        {/* Go to Console Button */}
        <button 
          onClick={showAuth}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-200 font-medium transform hover:scale-105"
        >
          Go to Console
        </button>
      </div>
    </header>
  );
};

export default Header;