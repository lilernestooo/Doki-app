import React, { useState } from 'react';

import MenuCard        from '../components/MenuCard';
import ProductSkeleton from '../components/ProductSkeleton';
import BestSellers     from '../components/BestSellers';
import CategoryFilter  from '../components/CategoryFilter';
import BentoGrid       from '../components/BentoGrid';

import dokiImg from '../assets/DokiImg.png';
import '../styles/ProductsPage.css';

/* ─────────────────────────────────────────
   Data
   Replace images with per-product assets
   once you have them.
───────────────────────────────────────── */

const BEST_SELLERS = [
  { id: 1, name: 'Coffee Jelly',  price: 150, tag: 'HOT', image: dokiImg },
  { id: 2, name: 'Dirty Matcha',  price: 145, tag: 'HOT',     image: dokiImg },
  { id: 3, name: 'Café Latte',    price: 130, tag: 'HOT',      image: dokiImg },
  { id: 4, name: 'Espresso Shot', price: 100, tag: 'HOT',         image: dokiImg },
];

const ALL_PRODUCTS = {
  COFFEE: [
    { id: 1,  name: 'Espresso Shot',  price: 100, tag: 'BOLD',         image: dokiImg },
    { id: 2,  name: 'Dirty Matcha',   price: 145, tag: 'TRENDING',     image: dokiImg },
    { id: 3,  name: 'Coffee Jelly',   price: 150, tag: 'FAN FAVORITE', image: dokiImg },
    { id: 4,  name: 'Café Latte',     price: 130, tag: 'CLASSIC',      image: dokiImg },
    { id: 5,  name: 'Spanish Latte',  price: 140,                      image: dokiImg },
    { id: 6,  name: 'Americano',      price: 120,                      image: dokiImg },
  ],
  'NON-COFFEE': [
    { id: 7,  name: 'Matcha Latte',    price: 145, image: dokiImg },
    { id: 8,  name: 'Strawberry Milk', price: 130, image: dokiImg },
    { id: 9,  name: 'Choco Shake',     price: 135, image: dokiImg },
    { id: 10, name: 'Taro Milk Tea',   price: 140, image: dokiImg },
  ],
  PASTRIES: [
    { id: 11, name: 'Croissant',     price: 80, image: dokiImg },
    { id: 12, name: 'Cheese Roll',   price: 60, image: dokiImg },
    { id: 13, name: 'Butter Cookie', price: 45, image: dokiImg },
  ],
};

const CATEGORIES = ['ALL', 'COFFEE', 'NON-COFFEE', 'PASTRIES'];

/* How long the skeleton shows (ms) */
const SKELETON_MS = 1600;

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */

const getProducts = (category) => {
  if (category === 'ALL') return Object.values(ALL_PRODUCTS).flat();
  return ALL_PRODUCTS[category] ?? [];
};

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */

/**
 * view state machine:
 *   'menu'     → splash MenuCard (first visit only, via sessionStorage)
 *   'loading'  → ProductSkeleton for SKELETON_MS
 *   'products' → full page
 *
 * sessionStorage key 'doki_visited' is set after the first tap so
 * navigating away and back within the same tab skips the splash.
 * It clears automatically when the browser tab is closed.
 */
const ProductPage = () => {
  const [view, setView] = useState(() =>
    sessionStorage.getItem('doki_visited') ? 'products' : 'menu'
  );
  const [activeCategory, setActiveCategory] = useState('ALL');

  const handleEnterMenu = () => {
    setView('loading');
    sessionStorage.setItem('doki_visited', '1');
    setTimeout(() => setView('products'), SKELETON_MS);
  };

  /* ── Views ── */

  if (view === 'menu') {
    return (
      <div className="products-page">
        <MenuCard onEnter={handleEnterMenu} />
      </div>
    );
  }

  if (view === 'loading') {
    return (
      <div className="products-page">
        <ProductSkeleton />
      </div>
    );
  }

  const visibleProducts = getProducts(activeCategory);

  return (
    <div className="products-page">

      {/* ✅ CENTER CONTAINER */}
      <div className="products-page__container">

        {/* ── Best seller horizontal strip ── */}
        <BestSellers items={BEST_SELLERS} />

        {/* ── Category tabs ── */}
        <CategoryFilter
          categories={CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {/* ── Section header bar ── */}
        <div className="products-page__section-bar">
          <span className="products-page__section-label">
            {activeCategory === 'ALL' ? 'FULL MENU' : activeCategory}
          </span>
        </div>

        {/* ── Bento product grid ── */}
        <BentoGrid items={visibleProducts} />

      </div>
    </div>
  );
};

export default ProductPage;