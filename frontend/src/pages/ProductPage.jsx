import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  // Optional state for filtering
  const [activeCategory, setActiveCategory] = useState('ALL');

  const bestSellers = [
    { id: 1, name: "Espresso Shot", image: "/src/assets/DokiImg.png" },
    { id: 2, name: "White Mocha", image: "/src/assets/DokiImg.png" },
    { id: 3, name: "Coffee Jelly", image: "/src/assets/DokiImg.png" },
    { id: 4, name: "Iced Latte", image: "/src/assets/DokiImg.png" },
  ];

  const coffeeList = [
    { id: 5, name: "Espresso Shot", image: "/src/assets/DokiImg.png" },
    { id: 6, name: "White Mocha", image: "/src/assets/DokiImg.png" },
    { id: 7, name: "Coffee Jelly", image: "/src/assets/DokiImg.png" },
    { id: 8, name: "Cafe Latte", image: "/src/assets/DokiImg.png" },
    { id: 9, name: "Spanish Latte", image: "/src/assets/DokiImg.png" },
    { id: 10, name: "Americano", image: "/src/assets/DokiImg.png" },
  ];

  const categories = ['ALL', 'COFFEE', 'NON-COFFEE', 'PASTRIES', 'MERCH'];

  return (
    <div className="w-full min-h-screen pb-20 bg-white font-sans">
      
      {/* 1. BEST SELLERS SECTION */}
      <section className="w-full pt-4">
        <div className="bg-[#1A1A1A] py-2 px-4 text-center border-b border-black">
          <h2 className="text-[11px] font-black italic tracking-[0.3em] text-white uppercase">
            Featured Best Sellers
          </h2>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex overflow-x-auto gap-8 p-10 scrollbar-hide snap-x justify-start md:justify-center">
          {bestSellers.map((product) => (
            <div key={product.id} className="snap-center shrink-0">
              <ProductCard product={product} variant="best-seller" />
            </div>
          ))}
        </div>
      </section>

      {/* 2. CATEGORY NAV / FILTER BAR */}
      <div className="sticky top-0 z-10 bg-white border-y border-gray-200">
        <div className="flex justify-center gap-6 py-4 overflow-x-auto px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-bold tracking-widest transition-all ${
                activeCategory === cat 
                ? 'text-[#FF4141] border-b-2 border-[#FF4141]' 
                : 'text-gray-400 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. MAIN PRODUCT GRID */}
      <section className="w-full">
        <div className="bg-black text-white py-2 px-4 text-center border-y-2 border-[#FF4141]">
          <h2 className="text-[11px] font-black italic tracking-[0.3em] uppercase">
            {activeCategory} Collection
          </h2>
        </div>

        {/* Grid Layout: Optimized for 2, 4, or 6 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 p-8 md:p-12 max-w-[1500px] mx-auto">
          {coffeeList.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;