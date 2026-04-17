import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 mt-auto border-t-4 border-[#FF4141]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section: Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <img 
            src="/src/assets/logo (3).png" 
            className="h-8 invert opacity-80" 
            alt="Doki Logo" 
          />
          <p className="text-[10px] font-bold opacity-40 italic tracking-tight">
            EST. 2024 | DOKI CAFE PROJECT
          </p>
        </div>

        {/* Center Section: Navigation/Socials */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-8 text-[11px] font-black italic tracking-[0.2em] text-[#FF4141]">
            <a href="#" className="hover:text-white transition-colors">FACEBOOK</a>
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition-colors">LOCATION</a>
          </div>
          <div className="h-[1px] w-24 bg-[#FF4141] opacity-30"></div>
        </div>

        {/* Right Section: Legal */}
        <div className="text-center md:text-right">
          <p className="text-[9px] font-bold opacity-30 italic uppercase tracking-widest">
            © 2026 All Rights Reserved
          </p>
          <p className="text-[8px] font-medium opacity-20 mt-1">
            Designed for the Doki Community
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;