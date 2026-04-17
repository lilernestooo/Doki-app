import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirm: '',
    email: '',
    contact: '',
    address: ''
  });
  const [error, setError] = useState('');

  const fields = [
    { id: "username", label: "USER NAME", type: "text" },
    { id: "password", label: "PASSWORD", type: "password" },
    { id: "confirm", label: "CONFIRM PASSWORD", type: "password" },
    { id: "email", label: "EMAIL ADDRESS", type: "email" },
    { id: "contact", label: "CONTACT NUMBER", type: "tel" },
    { id: "address", label: "CONTACT ADDRESS", type: "text" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    if (name === 'confirm' || name === 'password') {
      if (updatedData.password !== updatedData.confirm && updatedData.confirm !== '') {
        setError('PASSWORDS DO NOT MATCH');
      } else {
        setError('');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans uppercase overflow-x-hidden">
      {/* Top Brand Accent */}
      <div className="w-full bg-doki-red h-4 md:h-6 border-b-2 border-black z-50" />
      
      {/* Header Section: Centered Title (Logo Removed) */}
      <div className="bg-black text-white px-6 py-6 flex items-center justify-center border-b-[6px] border-doki-red shadow-lg animate-fadeIn">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl md:text-3xl font-black leading-tight italic tracking-tighter">Customer</h1>
          <h1 className="text-2xl md:text-3xl font-black leading-tight italic tracking-tighter">Registration</h1>
        </div>
      </div>
      
      {/* Form Content Area */}
      <div className="flex-grow px-8 pt-12 flex flex-col items-center justify-center">
        
        <form className="w-full max-w-[300px] md:max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col items-center relative">
              <input 
                name={field.id}
                type={field.type}
                value={formData[field.id]}
                onChange={handleChange}
                className={`w-full border-2 border-black rounded-xl p-2 md:p-3 text-center text-sm font-bold outline-none focus:ring-2 focus:ring-doki-red shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
                  field.id === 'confirm' && error ? 'border-doki-red ring-2 ring-doki-red' : ''
                }`} 
              />
              <label className="text-[10px] md:text-[11px] font-black mt-2 tracking-widest text-black">
                {field.label}
              </label>
              
              {field.id === 'confirm' && error && (
                <span className="absolute -bottom-5 text-[9px] font-black text-doki-red animate-pulse">
                  {error}
                </span>
              )}
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-6 md:col-span-2">
            <button 
              type="button"
              disabled={!!error}
              onClick={() => navigate('/home')} 
              className={`flex-1 bg-doki-red text-white py-3 rounded-xl font-black italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] transition-all ${
                error ? 'opacity-50 cursor-not-allowed grayscale' : ''
              }`}
            >
              CONFIRM
            </button>
            <button 
              type="button"
              onClick={() => navigate('/')} 
              className="flex-1 bg-doki-red text-white py-3 rounded-xl font-black italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] transition-all"
            >
              CANCEL
            </button>
          </div>
        </form>

        <p className="my-10 text-[10px] font-black tracking-[0.2em] text-black opacity-30">
          DOKI COFFEE CO. © 2026
        </p>
      </div>

      {/* Bottom Brand Accent */}
      <div className="w-full bg-doki-red h-4 md:h-6 border-t-2 border-black mt-auto" />
    </div>
  );
};

export default RegisterPage;