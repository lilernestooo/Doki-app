import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden bg-[#1A1A1A]">
        <img 
          src="/src/assets/DokiImg.png" 
          alt="Doki Cafe Exterior"
          className="w-full h-full object-contain md:object-cover object-center transition-transform duration-700 hover:scale-105"
        />
      </section>

      {/* 2. BRAND STORY SECTION */}
      <section className="w-full border-t border-black">
        <div className="bg-black text-white py-3 px-4 text-center">
          <h2 className="text-[11px] md:text-[16px] font-black italic tracking-[0.3em] uppercase">
            Why Our Coffee?
          </h2>
        </div>
        
        <div className="bg-[#BDBDBD] p-12 md:p-32 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <p className="text-[14px] md:text-[24px] leading-relaxed font-black italic text-black/90 mb-8 uppercase tracking-tight">
              The Art of the 3D Foam Latte
            </p>
            <p className="text-[12px] md:text-[18px] leading-relaxed font-bold italic text-black/70">
              "Drinking the 3D Animal Foam Art Latte not only boosts your energy 
              and improves focus through its rich espresso but also uplifts your 
              mood with its adorable and comforting design, while its creamy, 
              well-balanced flavor provides a satisfying experience."
            </p>
            <div className="h-[2px] w-16 bg-[#FF4141] my-8 mx-auto"></div>
            <p className="text-[11px] md:text-[15px] leading-relaxed font-semibold italic text-black/50 uppercase tracking-widest">
              Making each cup both visually delightful and perfect for relaxation.
            </p>
          </div>
        </div>
        
        <div className="bg-[#FF4141] h-12 md:h-20 w-full flex items-center justify-center">
             <span className="text-white text-[10px] md:text-[14px] font-black tracking-[0.6em] italic opacity-90 uppercase">
                Doki Cafe Project • 2026
             </span>
        </div>
      </section>

      {/* 3. FINAL CALL TO ACTION (Logo Only) */}
      {/* Container removed. The logo now floats and scales on hover. */}
      <section className="py-24 bg-white flex flex-col items-center border-b border-black">
         <Link to="/products" className="group">
            <img 
              src="/src/assets/logo (3).png" 
              className="h-32 md:h-48 w-auto object-contain transition-all duration-500 group-hover:scale-110" 
              alt="Doki Logo" 
            />
         </Link>
      </section>
    </div>
  );
};

export default HomePage;