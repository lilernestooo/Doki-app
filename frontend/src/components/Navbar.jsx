import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import SearchBar from './SearchBar';
import '../styles/Navbar.css';
import logo from '../assets/logo (3).png';

const navItems = [
  { label: 'HOME',     path: '/home'     },
  { label: 'PRODUCTS', path: '/products' },
  { label: 'ORDERS',   path: '/orders'   },
  { label: 'ACCOUNT',  path: '/account'  },
  { label: 'ABOUT US', path: '/aboutus'  },
];

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);

  const dropdownRef = useRef(null);
  const searchRef   = useRef(null);

  const username =
    localStorage.getItem('username') ||
    localStorage.getItem('name') ||
    'Guest';

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search bar on route change
  useEffect(() => {
    setSearchOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setDropdownOpen(false);
    navigate('/login');
  };

  // ✅ NEW: handle edit profile
  const handleEditProfile = () => {
    setDropdownOpen(false);
    navigate('/account'); // redirects to AccountPage.jsx
  };

  return (
    <nav className="nb-nav">
      <div className="nb-topbar" />

      <div className="nb-top-row">

        {/* Logo + user dropdown */}
        <div className="nb-logo-wrap" ref={dropdownRef}>
          <button
            className="nb-logo-btn"
            onClick={() => setDropdownOpen((prev) => !prev)}
            aria-label="Toggle user menu"
          >
            <img src={logo} alt="Doki Logo" className="nb-logo" />
          </button>

          {dropdownOpen && (
            <div className="nb-dropdown">
              <div className="nb-dropdown-user">
                <span className="nb-dropdown-avatar">
                  {username.charAt(0).toUpperCase()}
                </span>
                <div className="nb-dropdown-info">
                  <span className="nb-dropdown-label">Signed in as</span>
                  <span className="nb-dropdown-name">{username}</span>
                </div>
              </div>

              <div className="nb-dropdown-divider" />

              <button
                className="nb-dropdown-edit"
                onClick={handleEditProfile}
              >
                <EditIcon fontSize="small" />
                Edit Profile
              </button>

              <button className="nb-dropdown-logout" onClick={handleLogout}>
                <span className="nb-dropdown-logout-icon">⏻</span>
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Animated search bar */}
        <div className="nb-search-area" ref={searchRef}>
          <div className={`nb-search-slide ${searchOpen ? 'nb-search-slide--open' : ''}`}>
            <SearchBar autoFocus={searchOpen} />
          </div>

          <button
            className="nb-search-icon-btn"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Toggle search"
          >
            {searchOpen ? <CloseIcon /> : <SearchIcon />}
          </button>
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