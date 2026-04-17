import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DokiHero from '../assets/DokiImg-removebg.png'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden relative">
      
      {/* Top Brand Strip - Visual anchor */}
      <div className="w-full bg-doki-red h-4 md:h-6 border-b-2 border-black z-50" />

      <div className="flex-grow flex flex-col items-center justify-center px-6 py-10 relative">
        
        {/* Signup/Login Toggle - Positioned top right as per branding */}
        <div className="absolute top-10 right-6 md:right-12 flex space-x-3 text-[12px] font-black text-doki-red animate-fadeIn">
          <Link to="/register" className="hover:underline">SIGNUP</Link>
          <span className="text-black">|</span>
          <span className="text-doki-red opacity-50 cursor-default">LOGIN</span>
        </div>

        {/* Hero Illustration - Scaled for impact */}
        <div className="w-full max-w-[320px] md:max-w-md animate-fadeIn">
          <img 
            src={DokiHero} 
            alt="Doki Brand Art" 
            className="w-full h-auto object-contain mb-[-15px] md:mb-[-30px]" 
          />
        </div>

        {/* Login Form - Organized Stack */}
        <form 
          onSubmit={handleLogin} 
          className="w-full max-w-[280px] md:max-w-xs space-y-6 z-20 animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          {/* User Name Input */}
          <div className="flex flex-col items-center">
            <input
              type="text"
              className="w-full border-2 border-black rounded-xl p-2 md:p-3 text-center text-sm font-bold outline-none focus:ring-2 focus:ring-doki-red transition-all"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required
            />
            <label className="text-[10px] md:text-[11px] font-black mt-1 tracking-widest text-black uppercase">User Name</label>
          </div>
          
          {/* Password Input */}
          <div className="flex flex-col items-center">
            <input
              type="password"
              className="w-full border-2 border-black rounded-xl p-2 md:p-3 text-center text-sm font-bold outline-none focus:ring-2 focus:ring-doki-red transition-all"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <label className="text-[10px] md:text-[11px] font-black mt-1 tracking-widest text-black uppercase">Password</label>
          </div>

          {/* Buttons - Thick shadows for that "Pop" look */}
          <div className="flex space-x-4 pt-2">
            <button 
              type="submit" 
              className="flex-1 bg-doki-red text-white py-2 md:py-3 rounded-xl font-black italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              LOG-IN
            </button>
            
            <button 
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 bg-doki-red text-white py-2 md:py-3 rounded-xl font-black italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              CANCEL
            </button>
          </div>
        </form>

        {/* Bottom Tagline */}
        <p className="mt-12 text-[10px] font-black tracking-widest text-black opacity-40">
          DOKI COFFEE CO. © 2026
        </p>
      </div>

      {/* Bottom Brand Strip */}
      <div className="w-full bg-doki-red h-4 md:h-6 border-t-2 border-black mt-auto z-50" />
    </div>
  );
};

export default LoginPage;