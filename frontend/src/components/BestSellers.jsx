import React from 'react';
import ProductCard from './ProductCard';
import '../styles/BestSellers.css';

/**
 * BestSellers
 * A clean, fluid horizontal row where cards expand to fill the container.
 */
const BestSellers = ({ items }) => {
  return (
    <section className="best-sellers" aria-label="Best sellers">
      <div className="best-sellers__header">
        <span className="best-sellers__label">BEST SELLER</span>
      </div>

      <div className="best-sellers__scroll">
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            product={item}
            variant="best-seller"
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;