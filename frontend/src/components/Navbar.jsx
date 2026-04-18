import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const location = useLocation();

  const navItems = [
    { label: 'HOME', path: '/home' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'ORDERS', path: '/orders' },
    { label: 'ACCOUNT', path: '/account' },
    { label: 'ABOUT US', path: '/aboutus' },
  ];

  return (
    <nav style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }} className="w-full flex flex-col sticky top-0 z-50 shadow-lg">
      {/* Thin top accent */}
      <div className="h-1 w-full bg-doki-red" />

      {/* Logo + Search bar */}
      <div className="bg-doki-black px-4 py-3 flex items-center gap-4">
        <Link to="/home" className="flex-shrink-0 flex items-center gap-2">
          <img
            src="/src/assets/logo (3).png"
            alt="Doki Logo"
            className="h-10 w-auto object-contain brightness-200"
          />
        </Link>

        {/* Search */}
        <div className="flex-grow relative">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search drinks..."
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.04em',
            }}
            className="w-full h-10 rounded-full pl-4 pr-10 bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-doki-red focus:bg-white/15 transition-all"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Nav tabs */}
      <div className="flex w-full bg-[#1a1a1a] border-t border-white/10">
        {navItems.map((item, i) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: '0.08em' }}
              className={`
                flex-1 py-2.5 text-center text-[11px] transition-all relative
                ${i < navItems.length - 1 ? 'border-r border-white/10' : ''}
                ${isActive
                  ? 'bg-doki-red text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40" />
              )}
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;