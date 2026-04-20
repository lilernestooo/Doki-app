import React, { useRef, useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/BestSellers.css';

/**
 * BestSellers
 * Horizontal scroll strip with live dot indicator.
 *
 * Props:
 *   items  Array<{ id, name, price, tag, image }>
 */
const BestSellers = ({ items }) => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    /* card width (104px min) + gap (10px) ≈ 114 */
    const index = Math.min(
      Math.round(el.scrollLeft / 114),
      items.length - 1
    );
    setActiveDot(index);
  };

  return (
    <section className="best-sellers" aria-label="Best sellers">
      <div className="best-sellers__header">
        <span className="best-sellers__label">BEST SELLER</span>
      </div>

      <div
        className="best-sellers__scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            product={item}
            variant="best-seller"
            index={i}
          />
        ))}
      </div>

      <div className="best-sellers__dots" aria-hidden="true">
        {items.map((_, i) => (
          <span
            key={i}
            className={`best-sellers__dot${i === activeDot ? ' best-sellers__dot--on' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;