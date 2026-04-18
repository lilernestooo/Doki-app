import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DokiHero from '../assets/DokiImg-removebg.png';

const WelcomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col bg-white overflow-hidden relative"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Top red bar */}
      <div className="h-1.5 w-full bg-doki-red flex-shrink-0" />

      {/* Auth links — NO opacity animation, always visible and clickable */}
      <div
        className="flex items-center gap-2"
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          zIndex: 9999,
        }}
      >
        <Link
          to="/register"
          style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            letterSpacing: '0.15em',
            fontSize: '13px',
            color: '#FF2D2D',
            textDecoration: 'none',
          }}
        >
          SIGN UP
        </Link>
        <span style={{ color: '#ccc', fontSize: '12px' }}>|</span>
        <Link
          to="/login"
          style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            letterSpacing: '0.15em',
            fontSize: '13px',
            color: '#FF2D2D',
            textDecoration: 'none',
          }}
        >
          LOG IN
        </Link>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow px-6 py-10 relative z-10">

        {/* Welcome To text */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="text-center mb-1"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div style={{ height: '1px', width: '28px', background: '#e0e0e0' }} />
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ddd' }} />
            <div style={{ height: '1px', width: '28px', background: '#e0e0e0' }} />
          </div>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.5em',
              color: '#aaa',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            WELCOME TO
          </p>
        </div>

        {/* Hero image */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.96)',
            transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
            width: '100%',
            maxWidth: '380px',
            position: 'relative',
          }}
        >
          <img
            src={DokiHero}
            alt="Doki Coffee"
            className="w-full h-auto object-contain"
            style={{ maxHeight: '50vh' }}
          />
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s',
          }}
          className="flex flex-col items-center gap-1.5 mt-2"
        >
          <div className="flex items-center gap-2">
            <div style={{ height: '1px', width: '36px', background: 'rgba(255,45,45,0.3)' }} />
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FF2D2D' }} />
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '9px',
                letterSpacing: '0.45em',
                color: '#bbb',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              CAFE
            </p>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FF2D2D' }} />
            <div style={{ height: '1px', width: '36px', background: 'rgba(255,45,45,0.3)' }} />
          </div>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '9px',
              color: '#ccc',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            EVERY SIP TELLS A STORY
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="h-1.5 w-full bg-doki-red flex-shrink-0" />

    </div>
  );
};

export default WelcomePage;