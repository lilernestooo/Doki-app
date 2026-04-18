import React from 'react';
import { Link } from 'react-router-dom';

const bestSellers = [
  { id: 1, name: 'Coffee Jelly', price: 150, tag: 'FAN FAVORITE', emoji: '🍮' },
  { id: 2, name: 'Dirty Matcha', price: 145, tag: 'TRENDING', emoji: '🍵' },
  { id: 3, name: 'Café Latte', price: 130, tag: 'CLASSIC', emoji: '☕' },
];

const coffeeList = [
  { id: 1, name: 'Espresso Shot', price: 100 },
  { id: 2, name: 'Dirty Matcha', price: 145 },
  { id: 3, name: 'Coffee Jelly', price: 150 },
  { id: 4, name: 'Café Latte', price: 130 },
  { id: 5, name: 'Spanish Latte', price: 140 },
  { id: 6, name: 'Americano', price: 120 },
];

const HomePage = () => {
  return (
    <div
      className="w-full min-h-screen bg-white overflow-x-hidden flex flex-col"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >

      {/* ── HERO BANNER ── */}
      <section className="relative w-full bg-doki-black overflow-hidden" style={{ minHeight: '52vw', maxHeight: '280px' }}>
        <img
          src="/src/assets/DokiImg.png"
          alt="Doki Cafe"
          className="w-full h-full object-cover object-center opacity-80"
          style={{ position: 'absolute', inset: 0, height: '100%' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
        />
        {/* Text on hero */}
        <div className="absolute bottom-4 left-4 right-4">
          <p
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.35em',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            DOKI CAFÉ · ANGELES CITY
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '28px',
              letterSpacing: '0.04em',
              color: 'white',
              lineHeight: 1.1,
            }}
          >
            Every Sip<br />Tells a Story
          </h2>
        </div>
      </section>

      {/* ── BEST SELLER STRIP ── */}
      <section className="w-full">
        {/* Section header */}
        <div className="flex items-center px-4 py-3 border-b border-black/10">
          <div className="h-4 w-1 bg-doki-red rounded-full mr-2" />
          <span
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.25em',
              color: '#111',
            }}
          >
            BEST SELLER
          </span>
        </div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-3 px-4 py-4 overflow-x-auto scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
          {bestSellers.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              style={{ scrollSnapAlign: 'start', minWidth: '140px', maxWidth: '140px' }}
              className="flex-shrink-0 group"
            >
              <div className="relative rounded-xl overflow-hidden bg-[#f5f5f5] border border-black/8">
                {/* Placeholder image area */}
                <div
                  className="w-full flex items-center justify-center bg-[#efefef] text-4xl"
                  style={{ height: '120px' }}
                >
                  {item.emoji}
                </div>
                {/* Tag */}
                <div
                  className="absolute top-2 left-0 bg-doki-red text-white px-2 py-0.5"
                  style={{
                    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    borderRadius: '0 4px 4px 0',
                  }}
                >
                  {item.tag}
                </div>
              </div>
              {/* Info */}
              <div className="mt-2 px-0.5">
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#111',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                    fontSize: '13px',
                    color: '#FF2D2D',
                    letterSpacing: '0.05em',
                  }}
                >
                  ₱{item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── COFFEE LIST GRID ── */}
      <section className="w-full border-t border-black/8">
        <div className="flex items-center px-4 py-3 border-b border-black/10">
          <div className="h-4 w-1 bg-doki-black rounded-full mr-2" />
          <span
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.25em',
              color: '#111',
            }}
          >
            COFFEE LIST
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 px-4 py-4">
          {coffeeList.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="flex flex-col items-center group">
              {/* Image box with red border */}
              <div
                className="w-full aspect-square rounded-lg bg-[#f0f0f0] flex items-center justify-center text-3xl border-2 border-doki-red/80"
              >
                ☕
              </div>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '9px',
                  fontWeight: 700,
                  color: '#111',
                  textAlign: 'center',
                  marginTop: '4px',
                  lineHeight: 1.3,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: '11px',
                  color: '#FF2D2D',
                }}
              >
                ₱{item.price}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY DOKI SECTION ── */}
      <section className="w-full bg-[#111] text-white px-6 py-8 mt-2">
        <p
          style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '8px',
          }}
        >
          WHY OUR COFFEE?
        </p>
        <h3
          style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: '26px',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            marginBottom: '12px',
          }}
        >
          Art You Can<br />Drink
        </h3>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '12px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Our 3D Animal Foam Latte isn't just a drink — it's an experience. 
          Rich espresso, creamy milk, and a sculpted foam character that's almost 
          too cute to sip.
        </p>
        <div className="mt-4 h-px w-full bg-white/10" />
        <div className="mt-4 flex items-center justify-between">
          <Link
            to="/products"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.2em',
              color: '#FF2D2D',
            }}
          >
            SEE ALL DRINKS →
          </Link>
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '10px',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Doki Café · 2026
          </span>
        </div>
      </section>
    </div>
  );
};

export default HomePage;