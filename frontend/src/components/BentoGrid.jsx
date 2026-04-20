import React from 'react';
import ProductCard from './ProductCard';
import '../styles/BentoGrid.css';

/**
 * BentoGrid
 * 2-column grid where every 3rd item (index 2, 5, 8 …) is a wide
 * featured cell that spans both columns.
 *
 * Props:
 *   items  Array<{ id, name, price, tag?, image }>
 */

/* Indices (0-based) that should render as wide cells */
const isWideIndex = (i) => i % 3 === 2; /* 2, 5, 8, 11 … */

const BentoGrid = ({ items }) => {
  if (!items.length) {
    return (
      <div className="bento-empty">
        <p>No items in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="bento-grid">
      {items.map((item, i) => {
        const wide = isWideIndex(i);
        return (
          <div
            key={item.id}
            className={`bento-grid__cell${wide ? ' bento-grid__cell--wide' : ''}`}
          >
            <ProductCard
              product={item}
              variant={wide ? 'wide' : 'grid'}
              index={i}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BentoGrid;