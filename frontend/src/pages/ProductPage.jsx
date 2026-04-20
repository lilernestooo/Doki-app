import React, { useState } from 'react';
import CakeIcon from '@mui/icons-material/Cake';

import MenuCard        from '../components/MenuCard';
import ProductSkeleton from '../components/ProductSkeleton';
import BestSellers     from '../components/BestSellers';
import ProductCard     from '../components/ProductCard';

import dokiImg         from '../assets/DokiImg.png';
import matchaLatteImg  from '../assets/Matcha-Latte.jpg';
import dirtyMatchaImg  from '../assets/Dirty-matcha.jpg';
import koichaImg       from '../assets/Koicha.jpg';
import uusuchaImg      from '../assets/Usucha.jpg';

import '../styles/ProductsPage.css';

/* ─────────────────────────────────────────
   SVG Icons
───────────────────────────────────────── */

const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
       className="menu-section__icon">
    <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
    <line x1="6" x2="6" y1="2" y2="4"/>
    <line x1="10" x2="10" y1="2" y2="4"/>
    <line x1="14" x2="14" y1="2" y2="4"/>
  </svg>
);

const TeaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
       className="menu-section__icon">
    <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
    <path d="M9 2c0 1-1.5 2-1.5 3"/>
    <path d="M13 2c0 1-1.5 2-1.5 3"/>
  </svg>
);

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

const BEST_SELLERS = [
  { id: 101, name: 'Matcha Latte',        price: 170, tag: '🔥', image: matchaLatteImg },
  { id: 102, name: 'Dirty Matcha',        price: 190, tag: '🔥', image: dirtyMatchaImg },
  { id: 103, name: 'Koicha-Thick Matcha', price: 195, tag: '🔥', image: koichaImg      },
  { id: 104, name: 'Usucha-Thin Matcha',  price: 180, tag: '🔥', image: uusuchaImg     },
];

const ALL_PRODUCTS = {
  COFFEE: [
    { id: 1,  name: 'Japanese Iced Coffee (Flash Brew) ',  price: 150, tag: 'BOLD',         image: dokiImg },
    { id: 2,  name: 'Sakura Latte',   price: 200, tag: 'TRENDING',     image: dokiImg },
    { id: 3,  name: 'Affogato',   price: 180, tag: 'FAN FAVORITE', image: dokiImg },
    { id: 4,  name: 'Siphon Coffee',     price: 230, tag: 'CLASSIC',      image: dokiImg },
    { id: 5,  name: 'Hojicha Latte ',  price: 160,                      image: dokiImg },
    { id: 6,  name: 'Coffee Jelly Latte',      price: 180,                      image: dokiImg },
  ],
  'NON-COFFEE': [
    { id: 7,  name: 'Matcha Latte',    price: 170, image: dokiImg },
    { id: 8,  name: 'Genmaicha Latte', price: 180, image: dokiImg },
    { id: 9,  name: 'Yuzu Tea',     price: 170, image: dokiImg },
    { id: 10, name: 'Strawberry Milk (Ichigo Milk)',   price: 150, image: dokiImg },
  ],
  PASTRIES: [
    { id: 11, name: 'Croissant',     price: 100, image: dokiImg },
    { id: 12, name: 'Cheese Roll',   price: 90, image: dokiImg },
    { id: 13, name: 'Butter Cookie', price: 60, image: dokiImg },
  ],
};

const SECTION_META = {
  COFFEE:       { Icon: CoffeeIcon,                          label: 'Coffee'     },
  'NON-COFFEE': { Icon: TeaIcon,                             label: 'Non-Coffee' },
  PASTRIES:     { Icon: () => <CakeIcon className="menu-section__icon" />, label: 'Pastries'   },
};

const SKELETON_MS = 1600;

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */

const ProductPage = () => {
  const [view, setView] = useState(() =>
    sessionStorage.getItem('doki_visited') ? 'products' : 'menu'
  );

  const handleEnterMenu = () => {
    setView('loading');
    sessionStorage.setItem('doki_visited', '1');
    setTimeout(() => setView('products'), SKELETON_MS);
  };

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

  return (
    <div className="products-page">
      <div className="products-page__container">

        {/* ── Best seller strip ── */}
        <BestSellers items={BEST_SELLERS} />

        {/* ── Sectioned menu ── */}
        <div className="menu-sections">
          {Object.entries(ALL_PRODUCTS).map(([category, products]) => {
            const { Icon, label } = SECTION_META[category];
            return (
              <div key={category} className="menu-section">

                {/* Section header bar */}
                <div className="menu-section__bar">
                  <div className="menu-section__bar-inner">
                    <Icon />
                    <span className="menu-section__label">{label}</span>
                    <span className="menu-section__count">{products.length} items</span>
                  </div>
                </div>

                {/* Product grid */}
                <div className="menu-section__grid">
                  {products.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      variant="grid"
                      index={i}
                    />
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ProductPage;