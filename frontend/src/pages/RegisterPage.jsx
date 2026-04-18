import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '', password: '', confirmPassword: '',
    email: '', contact: '', address: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const fields = [
    { name: 'username', label: 'USER NAME', type: 'text', placeholder: 'Choose a username' },
    { name: 'password', label: 'PASSWORD', type: 'password', placeholder: 'Create a password' },
    { name: 'confirmPassword', label: 'CONFIRM PASSWORD', type: 'password', placeholder: 'Repeat password' },
    { name: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'your@email.com' },
    { name: 'contact', label: 'CONTACT NUMBER', type: 'tel', placeholder: '+63 9XX XXX XXXX' },
    { name: 'address', label: 'CONTACT ADDRESS', type: 'text', placeholder: 'Street, Barangay, City' },
  ];

  return (
    <div
      className="min-h-screen flex flex-col bg-white overflow-hidden"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Top bar */}
      <div className="h-1.5 w-full bg-doki-red" />

      {/* Header */}
      <div className="bg-doki-black px-6 py-5 flex items-center gap-3">
        <img
          src="/src/assets/logo (3).png"
          alt="Doki Logo"
          className="h-10 w-auto brightness-200 object-contain"
        />
        <div>
          <p
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '18px',
              letterSpacing: '0.12em',
              color: 'white',
              lineHeight: 1,
            }}
          >
            CUSTOMER REGISTRATION
          </p>
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
            Create your Doki account
          </p>
        </div>
      </div>

      {/* Page body */}
      <div className="flex-grow flex flex-col items-center justify-start px-5 py-8 bg-[#f7f7f7] overflow-y-auto">

        {/* ── FORM CARD CONTAINER ── */}
        <div className="w-full max-w-sm bg-white rounded-2xl px-6 py-8"
          style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)', border: '1px solid #f0f0f0' }}
        >
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#f5f5f5] border-2 border-doki-red flex items-center justify-center">
              <svg className="w-8 h-8 text-[#ccc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-4">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label
                  style={{
                    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: '#999',
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '13px',
                    border: '1.5px solid #e5e5e5',
                    borderRadius: '10px',
                    padding: '11px 16px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    width: '100%',
                    background: '#fafafa',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#FF2D2D')}
                  onBlur={e => (e.target.style.borderColor = '#e5e5e5')}
                />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#f0f0f0] my-6" />

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/login')}
              style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: '14px',
                letterSpacing: '0.18em',
                flex: 2,
                borderRadius: '50px',
                padding: '14px',
                background: '#FF2D2D',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.target.style.background = '#cc2020')}
              onMouseLeave={e => (e.target.style.background = '#FF2D2D')}
            >
              CONFIRM
            </button>
            <button
              onClick={() => navigate('/')}
              style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: '14px',
                letterSpacing: '0.18em',
                flex: 1,
                borderRadius: '50px',
                padding: '14px',
                background: 'transparent',
                color: '#999',
                border: '1.5px solid #e5e5e5',
                cursor: 'pointer',
              }}
            >
              CANCEL
            </button>
          </div>

          {/* Login link */}
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '12px',
              color: '#bbb',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              style={{ color: '#FF2D2D', fontWeight: 700, cursor: 'pointer' }}
            >
              Log In
            </span>
          </p>
        </div>
        {/* ── END FORM CARD ── */}

      </div>

      <div className="h-1.5 w-full bg-doki-red" />
    </div>
  );
};

export default RegisterPage;