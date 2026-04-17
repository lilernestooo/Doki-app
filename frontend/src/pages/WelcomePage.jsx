import React from 'react';
import { useNavigate } from 'react-router-dom';
import DokiHero from '../assets/DokiImg-removebg.png'; 

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      {/* Top Accent Bar */}
      <div className="h-2 md:h-4 bg-doki-red w-full" />
      
      <div className="flex flex-col items-center justify-center flex-grow px-6 py-12 md:px-10 text-center relative gap-8 md:gap-12">
        
        {/* Auth Navigation */}
        <div className="absolute top-6 right-6 md:top-8 md:right-10 flex space-x-4 text-[13px] md:text-[11px] font-black text-doki-red animate-fadeIn">
          <span onClick={() => navigate('/register')} className="hover:underline cursor-pointer">SIGNUP</span>
          <span className="text-black">|</span>
          <span onClick={() => navigate('/login')} className="hover:underline cursor-pointer">LOGIN</span>
        </div>

        {/* Branding - Scaled up for Mobile */}
        <div className="flex flex-col items-center animate-fadeIn">
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-light tracking-[0.3em] text-black leading-tight">
            WELCOME
          </h1>
          <h2 className="text-xl sm:text-lg md:text-xl font-bold text-black tracking-[0.2em] mt-2">
            TO
          </h2>
        </div>
        
        {/* Hero Image - Oversized for Mobile Impact */}
        <div className="
          w-[115%] max-w-[115%] ml-[-7.5%]   /* Makes image wider than the screen on mobile */
          sm:w-full sm:max-w-xl sm:ml-0      /* Resets to standard width on tablets/desktop */
          opacity-0 animate-fadeInDelayed
          transition-all duration-500
        ">
          <img 
            src={DokiHero} 
            alt="Doki Coffee Hero" 
            className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform" 
          />
        </div>

        {/* Vertical Spacer for Mobile Breathing Room */}
        <div className="h-2 md:hidden" />
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-2 md:h-4 bg-doki-red w-full" />
    </div>
  );
};

export default WelcomePage;