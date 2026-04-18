import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/Navbar.css';

// ✅ import image properly (Vite-safe)
import logo from '../assets/logo (3).png';

const navItems = [
  { label: 'HOME',     path: '/home'     },
  { label: 'PRODUCTS', path: '/products' },
  { label: 'ORDERS',   path: '/orders'   },
  { label: 'ACCOUNT',  path: '/account'  },
  { label: 'ABOUT US', path: '/aboutus'  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="nb-nav">
      {/* Top red accent bar */}
      <div className="nb-topbar" />

      {/* Logo + Search row */}
      <div className="nb-top-row">
        <Link to="/home" className="nb-logo-link">
          <img
            src={logo}   // ✅ FIXED HERE
            alt="Doki Logo"
            className="nb-logo"
          />
        </Link>

        <div className="nb-search-wrap">
          <SearchBar />
        </div>
      </div>

      {/* Nav tabs */}
      <div className="nb-tabs">
        {navItems.map((item, i) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`nb-tab ${isActive ? 'nb-tab--active' : ''} ${
                i < navItems.length - 1 ? 'nb-tab--border' : ''
              }`}
            >
              {item.label}
              {isActive && <span className="nb-tab-pip" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;