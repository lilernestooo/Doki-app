import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const bestSellers = [
  { id: 1, name: 'Coffee Jelly', price: 150, tag: 'FAN FAVORITE' },
  { id: 2, name: 'Dirty Matcha', price: 145, tag: 'TRENDING' },
  { id: 3, name: 'Café Latte', price: 130, tag: 'CLASSIC' },
  { id: 4, name: 'Espresso Shot', price: 100, tag: 'BOLD' },
];

const coffeeList = [
  { id: 1, name: 'Espresso Shot', price: 100 },
  { id: 2, name: 'Dirty Matcha', price: 145 },
  { id: 3, name: 'Coffee Jelly', price: 150 },
  { id: 4, name: 'Café Latte', price: 130 },
  { id: 5, name: 'Spanish Latte', price: 140 },
  { id: 6, name: 'Americano', price: 120 },
];

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const categories = ['ALL', 'COFFEE', 'NON-COFFEE', 'PASTRIES'];

  return (
    <div
      className="w-full min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >

      {/* ── BEST SELLERS ── */}
      <section className="w-full">
        <div
          className="py-2 px-4 text-center border-b border-black"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'white',
              fontStyle: 'italic',
            }}
          >
            BEST SELLER
          </span>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-3 px-4 py-4 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory', backgroundColor: '#f5f5f5' }}
        >
          {bestSellers.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              style={{ scrollSnapAlign: 'start', minWidth: '130px', maxWidth: '130px' }}
              className="flex-shrink-0"
            >
              <div
                style={{
                  border: '2.5px solid #FF2D2D',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  backgroundColor: '#e8e8e8',
                  height: '110px',
                  position: 'relative',
                }}
              >
                <img
                  src="/src/assets/DokiImg.png"
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    left: 0,
                    backgroundColor: '#FF2D2D',
                    color: 'white',
                    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                    fontSize: '8px',
                    letterSpacing: '0.1em',
                    padding: '2px 6px',
                    borderRadius: '0 3px 3px 0',
                  }}
                >
                  {item.tag}
                </div>
              </div>
              <div className="mt-1.5 px-0.5">
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '11px',
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
                    fontSize: '12px',
                    color: '#FF2D2D',
                  }}
                >
                  ₱{item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 py-2 bg-[#f5f5f5]">
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF2D2D' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ccc' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ccc' }} />
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <div className="flex gap-4 px-4 py-3 border-y border-black/10 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.15em',
              whiteSpace: 'nowrap',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              paddingBottom: '4px',
              color: activeCategory === cat ? '#FF2D2D' : '#aaa',
              borderBottom: activeCategory === cat ? '2px solid #FF2D2D' : '2px solid transparent',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── COFFEE LIST GRID ── */}
      <section className="w-full">
        <div
          className="py-2 px-4 text-center border-b border-black"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'white',
              fontStyle: 'italic',
            }}
          >
            COFFEE LIST
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 px-4 py-4">
          {coffeeList.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="flex flex-col items-center"
              style={{ textDecoration: 'none' }}
            >
              {/* Image with red border like the mockup */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  border: '2.5px solid #FF2D2D',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  backgroundColor: '#e8e8e8',
                }}
              >
                <img
                  src="/src/assets/DokiImg.png"
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '9px',
                  fontWeight: 700,
                  color: '#111',
                  textAlign: 'center',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  lineHeight: 1.3,
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

    </div>
  );
};

export default ProductPage;