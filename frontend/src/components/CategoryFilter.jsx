import React from 'react';
import '../styles/CategoryFilter.css';

/**
 * CategoryFilter
 * Horizontal scrollable tab bar.
 *
 * Props:
 *   categories  string[]
 *   active      string  — currently selected category
 *   onChange    (cat: string) => void
 */
const CategoryFilter = ({ categories, active, onChange }) => {
  return (
    <nav
      className="cat-filter"
      role="tablist"
      aria-label="Filter by category"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          className={`cat-filter__btn${active === cat ? ' cat-filter__btn--active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
};

export default CategoryFilter;