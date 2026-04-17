import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navItems = ['HOME', 'PRODUCTS', 'ORDERS', 'ACCOUNT', 'ABOUT US'];
  
  // Get the current URL path (e.g., "/products")
  const location = useLocation();

  return (
    <nav className="w-full flex flex-col font-sans">
      {/* 1. Top Red Safety Bar */}
      <div className="bg-[#FF4141] h-10 w-full"></div>

      {/* 2. Main Search & Logo Bar */}
      <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-4">
        <div className="flex-shrink-0">
          <img 
            src="/src/assets/coffee-removebg.png" 
            alt="Doki Logo" 
            className="h-10 w-auto brightness-200" 
          />
        </div>
        
        <div className="flex-grow relative">
          <input 
            type="text" 
            className="w-full h-8 rounded-lg px-4 text-sm focus:outline-none"
            placeholder=""
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
             <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
          </div>
        </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="flex w-full bg-[#999999] border-y border-black">
        {navItems.map((item) => {
          const path = `/${item.toLowerCase().replace(' ', '')}`;
          // Check if the current URL matches this link's path
          const isActive = location.pathname === path;

          return (
            <Link 
              key={item} 
              to={path}
              className={`flex-1 py-2 text-center text-[10px] font-bold border-r border-black last:border-r-0 transition-colors
                ${isActive 
                  ? 'bg-[#FFADAD] text-white' 
                  : 'bg-[#999999] text-white' 
                }`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;