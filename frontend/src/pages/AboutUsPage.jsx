import React from 'react';
import DokiLogo from '../assets/DokiImg.png';

const AboutUsPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col">

      {/* 1. HERO SECTION (FIXED BACKGROUND USING SAME IMAGE) */}
      <div className="w-full h-[450px] relative overflow-hidden border-b-2 border-black">
        
        {/* Background Image */}
        <img 
          src={DokiLogo}
          alt="Doki Cafe"
          className="w-full h-full object-cover brightness-50 contrast-125"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 z-10">
          
          <h1 className="text-white text-7xl font-black italic tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,1)] uppercase">
            Our Story
          </h1>

        </div>
      </div>

      {/* 2. BRAND RIBBON */}
      <div className="bg-black text-white py-3 flex justify-center items-center border-b-4 border-doki-red sticky top-0 z-20">
        <span className="text-[11px] font-black uppercase italic tracking-[0.5em]">
          Established 2024 — Doki Cafe — Built on Passion
        </span>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <div className="border-l-[12px] border-doki-red pl-10">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9] text-black mb-8">
              More than <br /> 
              <span className="text-doki-red">Just Coffee.</span>
            </h2>
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-gray-400">
              Comfort • Connection • Simple Joys
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col space-y-12">
          
          <div className="group">
            <h3 className="text-[12px] font-black bg-black text-white inline-block px-3 py-1 mb-4 italic transition-colors group-hover:bg-doki-red">
              01 — THE VISION
            </h3>
            <p className="text-[14px] leading-loose italic text-justify font-medium text-gray-800 border-b border-gray-100 pb-6">
              At Doki Cafe, we believe that every cup of coffee tells a story—one of comfort, 
              connection, and simple joys.
            </p>
          </div>

          <div className="group">
            <h3 className="text-[12px] font-black bg-doki-red text-white inline-block px-3 py-1 mb-4 italic">
              02 — THE CRAFT
            </h3>
            <p className="text-[14px] leading-loose italic text-justify font-medium text-gray-800 border-b border-gray-100 pb-6">
              We take pride in serving thoughtfully crafted beverages, from rich coffee to signature drinks.
            </p>
          </div>

          <div className="group">
            <h3 className="text-[12px] font-black bg-black text-white inline-block px-3 py-1 mb-4 italic transition-colors group-hover:bg-doki-red">
              03 — THE EXPERIENCE
            </h3>
            <p className="text-[14px] leading-loose italic text-justify font-medium text-gray-800">
              A warm space where friends gather and memories are made.
            </p>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM ACCENT */}
      <div className="mt-auto bg-doki-red h-6 w-full border-t-2 border-black" />

    </div>
  );
};

export default AboutUsPage;