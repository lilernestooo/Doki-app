import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

// ✅ FIX: Proper Vite image import (Vercel-safe)
import cafeImage from '../assets/cafe-image.png';
import dirtyMatchaImg from '../assets/Dirty-matcha.jpg';
import koichaImg from '../assets/Koicha.jpg';
import matchaLatteImg from '../assets/Matcha-Latte.jpg';
import usuchaImg from '../assets/Usucha.jpg';

// ── SVG Icons ──────────────────────────────────────────────────────────────
const CoffeeIcon = ({ size = 28, color = '#cccccc' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);

const LeafIcon = ({ size = 28, color = '#cccccc' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.09c-.68.96.69 1.89 1.54 1.09C7.5 18 10 17 13 17c5 0 8-4 8-8V3l-4 5z"/>
  </svg>
);

const StarIcon = ({ size = 28, color = '#cccccc' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const SakuraIcon = ({ size = 20, color = '#E32636' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 2a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
    <path d="M12 22a3 3 0 0 1-3-3v-2a3 3 0 0 1 6 0v2a3 3 0 0 1-3 3z"/>
    <path d="M2 12a3 3 0 0 1 3-3h2a3 3 0 0 1 0 6H5a3 3 0 0 1-3-3z"/>
    <path d="M22 12a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 3 3z"/>
  </svg>
);

const SparkleIcon = ({ size = 20, color = '#E32636' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/>
    <path d="M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z"/>
    <path d="M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75L19 3z"/>
  </svg>
);

const LanternIcon = ({ size = 20, color = '#E32636' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <rect x="6" y="6" width="12" height="12" rx="6"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
  </svg>
);

const bestSellers = [
  { id: 1, name: 'Dirty Matcha', price: 145, tag: '🔥', img: dirtyMatchaImg },
  { id: 2, name: 'Koicha', price: 160, tag: '🔥', img: koichaImg },
  { id: 3, name: 'Matcha Latte', price: 130, tag: '🔥', img: matchaLatteImg },
  { id: 4, name: 'Usucha', price: 140, tag: '🔥', img: usuchaImg },
];

const features = [
  {
    Icon: SakuraIcon,
    title: 'Japanese Aesthetic',
    desc: 'Inspired by sakura season and warm Tokyo café culture.'
  },
  {
    Icon: SparkleIcon,
    title: '3D Foam Art',
    desc: 'Every cup is sculpted by hand — too cute to drink, too good not to.'
  },
  {
    Icon: LanternIcon,
    title: 'Cozy Atmosphere',
    desc: 'Red lanterns, plush seats, and a space that feels like home.'
  },
];

// ── Component ──────────────────────────────────────────────────────────────
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hp-page">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hp-hero">
        <img
          src={cafeImage}
          alt="Doki Café interior"
          className="hp-hero-img"
        />
        <div className="hp-hero-overlay" />
        <div className="hp-hero-content">
          <p className="hp-hero-eyebrow">DOKI CAFÉ · ANGELES CITY</p>
          <h1 className="hp-hero-title">
            Every Sip<br />Tells a Story
          </h1>
          <p className="hp-hero-sub">
            3D Animal Foam Lattes · Specialty Coffee · Japanese-Inspired Drinks
          </p>

          <div className="hp-hero-btns">
            <Link to="/products" className="hp-btn-primary">ORDER NOW</Link>
            <Link to="/aboutus" className="hp-btn-ghost">OUR STORY</Link>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div className="hp-ticker">
        <div className="hp-ticker-track">
          {[
            'FREE DRINKS ON YOUR BIRTHDAY',
            '3D FOAM ART LATTES',
            'NEW: UBE SPANISH LATTE',
            'OPEN 9AM – 10PM DAILY',
            'DOKI CAFÉ · ANGELES CITY',
            'FREE DRINKS ON YOUR BIRTHDAY',
            '3D FOAM ART LATTES',
            'NEW: UBE SPANISH LATTE',
            'OPEN 9AM – 10PM DAILY',
            'DOKI CAFÉ · ANGELES CITY',
          ].map((t, i) => (
            <span key={i} className="hp-ticker-item">
              {t} <span className="hp-ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── BEST SELLERS ─────────────────────────────────── */}
      <section className="hp-section">
        <div className="hp-section-header">
          <div className="hp-section-bar" />
          <span className="hp-section-title">BEST SELLERS</span>
        </div>

        <div className="hp-cards">
        {bestSellers.map(({ id, name, price, tag, img }) => (
          <Link to={`/product/${id}`} key={id} className="hp-card">
            <div className="hp-card-img">
              <img src={img} alt={name} className="hp-card-photo" />
              <div className="hp-card-tag">{tag}</div>
            </div>
            <div className="hp-card-info">
              <p className="hp-card-name">{name}</p>
              <p className="hp-card-price">₱{price}</p>
            </div>
          </Link>
        ))}
        </div>

        <div className="hp-see-all-wrap">
          <Link to="/products" className="hp-see-all">
            SEE FULL MENU →
          </Link>
        </div>
      </section>

      {/* ── PHOTO STRIP ─────────────────────────────── */}
      <section className="hp-photo-strip">
        <img
          src={cafeImage}
          alt="Doki Café"
          className="hp-strip-img"
        />
        <div className="hp-strip-overlay">
          <p className="hp-strip-label">VISIT US IN ANGELES CITY</p>
          <h2 className="hp-strip-heading">
            A Place to Sip,<br />Stay & Smile
          </h2>
        </div>
      </section>

      {/* ── WHY DOKI ─────────────────────────────────────── */}
      <section className="hp-features">
        <div className="hp-section-header">
          <div className="hp-section-bar" />
          <span className="hp-section-title">WHY DOKI?</span>
        </div>

        <div className="hp-features-grid">
          {features.map(({ Icon, title, desc }, i) => (
            <div key={i} className="hp-feature-card">
              <div className="hp-feature-icon-wrap">
                <Icon size={20} color="#E32636" />
              </div>
              <div className="hp-feature-text">
                <h3 className="hp-feature-title">{title}</h3>
                <p className="hp-feature-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="hp-cta">
        <p className="hp-cta-eyebrow">READY TO ORDER?</p>
        <h2 className="hp-cta-heading">
          Your Perfect Cup<br />Is Waiting
        </h2>

        <Link to="/products" className="hp-btn-primary hp-cta-btn">
          EXPLORE THE MENU
        </Link>

        <div className="hp-cta-divider" />
        <p className="hp-cta-footer">
          Doki Café · Angeles City · 2026
        </p>
      </section>

    </div>
  );
};

export default HomePage;