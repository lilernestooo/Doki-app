import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
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

  return (
    <div className="w-full min-h-screen pb-20 bg-white font-sans">
      {/* Navbar is NOT here because it is handled by LayoutWrapper in App.jsx */}

      <section className="w-full">
        {/* Changed bg-gray-100 to bg-[#1A1A1A] (or bg-black) for the header bar */}
        <div className="bg-[#1A1A1A] py-1 px-4 text-center border-b border-black">
          {/* Changed text-black to text-white */}
          <h2 className="text-[10px] font-black italic tracking-widest text-white uppercase">
            Best Seller
          </h2>
        </div>

        {/* Horizontal scroll remains standard for mobile, but stretches to full width on web */}
        <div className="flex overflow-x-auto gap-8 p-10 scrollbar-hide snap-x justify-center">
          {bestSellers.map((product) => (
            <div key={product.id} className="snap-center shrink-0">
              <ProductCard product={product} variant="best-seller" />
            </div>
          ))}
        </div>
      </section>

      {/* --- COFFEE LIST SECTION --- */}
      <section className="w-full">
        <div className="bg-black text-white py-1 px-4 text-center border-y-2 border-doki-red">
          <h2 className="text-[10px] font-black italic tracking-widest uppercase">
            Coffee List
          </h2>
        </div>

        {/* RESPONSIVE GRID:
            - grid-cols-2 for very small phones
            - md:grid-cols-4 for tablets
            - lg:grid-cols-6 for full desktop view
        */}
        {/* This container ensures 2 columns on mobile, 4 on tablets, and 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 p-10 max-w-[1400px] mx-auto">
        {coffeeList.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;