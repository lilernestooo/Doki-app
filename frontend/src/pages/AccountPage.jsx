import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "DOKI_USER_01",
    email: "hello@doki.cafe",
    address: "123 Sakura St, Shibuya"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- LOGOUT LOGIC ---
  const handleLogout = () => {
    // 1. Clear local storage/tokens if you have them
    localStorage.removeItem('user_token'); 
    localStorage.removeItem('user_data');

    // 2. (Optional) Clear state
    setFormData({ name: "", email: "", address: "" });

    // 3. Redirect to Welcome/Login page
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-2xl bg-white border-[3px] border-black rounded-none overflow-hidden">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center py-12 border-b-[3px] border-black">
          <div className="w-32 h-32 rounded-full border-[5px] border-[#FF4141] p-1.5 mb-6">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white text-4xl font-black">
              {formData.name ? formData.name[0] : "?"}
            </div>
          </div>
          <h2 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
            {formData.name || "GUEST"}
          </h2>
        </div>

        {/* Interactive Form Area */}
        <div className="flex flex-col">
          <div className="p-8 border-b-[3px] border-black bg-white transition-colors focus-within:bg-gray-50">
            <label className="text-xs font-black text-[#FF4141] tracking-[0.2em] block mb-2 uppercase">
              Email Address
            </label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent text-xl font-bold italic text-black outline-none border-none p-0 cursor-text"
            />
          </div>

          <div className="p-8 border-b-[3px] border-black bg-white transition-colors focus-within:bg-gray-50">
            <label className="text-xs font-black text-[#FF4141] tracking-[0.2em] block mb-2 uppercase">
              Physical Address
            </label>
            <input 
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-transparent text-xl font-bold italic text-black outline-none border-none p-0 cursor-text uppercase"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-10 space-y-5 bg-white">
          <button 
            className="w-full border-[3px] border-black py-5 font-black text-sm tracking-[0.25em] hover:bg-black hover:text-white transition-all uppercase rounded-none"
            onClick={() => alert('Profile Updated!')}
          >
            Update Profile
          </button>
          
          <button 
            onClick={handleLogout}
            className="w-full bg-[#FF4141] text-white py-5 font-black text-sm tracking-[0.25em] italic hover:bg-[#e63939] transition-colors uppercase rounded-none"
          >
            Logout Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;