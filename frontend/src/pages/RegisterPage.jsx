import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

import logo from '../assets/logo (3).png';
// ── Eye Icons ──────────────────────────────────────────────────────────────
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

// ── Password strength helper ───────────────────────────────────────────────
const getStrength = (pw) => {
  if (!pw) return { score: 0, label: '', color: '' };
  let score = 0;
  if (pw.length >= 8)              score++;
  if (/[A-Z]/.test(pw))           score++;
  if (/[0-9]/.test(pw))           score++;
  if (/[^A-Za-z0-9]/.test(pw))   score++;
  const map = [
    { label: 'Too short',  color: '#E32636' },
    { label: 'Weak',       color: '#E32636' },
    { label: 'Fair',       color: '#f0a500' },
    { label: 'Good',       color: '#2ecc71' },
    { label: 'Strong',     color: '#27ae60' },
  ];
  return { score, ...map[score] };
};

// ── Component ──────────────────────────────────────────────────────────────
const RegisterPage = () => {
  const navigate = useNavigate();

  // Individual state (consistent with LoginPage pattern)
  const [username, setUsername]         = useState('');
  const [password, setPassword]         = useState('');
  const [confirmPassword, setConfirm]   = useState('');
  const [email, setEmail]               = useState('');
  const [contact, setContact]           = useState('');
  const [address, setAddress]           = useState('');

  // Eye toggles
  const [showPassword, setShowPassword]   = useState(false);
  const [showConfirm, setShowConfirm]     = useState(false);

  // Errors & touched
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});

  const strength = getStrength(password);

  // ── Validation ────────────────────────────────────────────────────────
  const validateField = (name, value) => {
    switch (name) {
      case 'username':
        if (!value.trim()) return 'Username is required.';
        if (value.trim().length < 3) return 'At least 3 characters.';
        return '';
      case 'password':
        if (!value) return 'Password is required.';
        if (value.length < 8) return 'At least 8 characters.';
        return '';
      case 'confirmPassword':
        if (!value) return 'Please confirm your password.';
        if (value !== password) return 'Passwords do not match.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email.';
        return '';
      case 'contact':
        if (!value.trim()) return 'Contact number is required.';
        if (!/^[\d\s+\-()]{7,15}$/.test(value)) return 'Enter a valid contact number.';
        return '';
      case 'address':
        if (!value.trim()) return 'Address is required.';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (name, value) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (name, value, setter) => {
    setter(value);
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
    // Re-validate confirmPassword live when password changes
    if (name === 'password' && touched.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmPassword !== value ? 'Passwords do not match.' : '',
      }));
    }
  };

  const handleSubmit = () => {
    const allTouched = { username: true, password: true, confirmPassword: true, email: true, contact: true, address: true };
    setTouched(allTouched);
    const values = { username, password, confirmPassword, email, contact, address };
    const newErrors = {};
    Object.keys(values).forEach((k) => { newErrors[k] = validateField(k, values[k]); });
    setErrors(newErrors);
    const isValid = Object.values(newErrors).every((e) => !e);
    if (isValid) navigate('/login');
  };

  // ── Password field helper ─────────────────────────────────────────────
  const PasswordInput = ({ name, value, onChange, onBlur, show, onToggle, placeholder }) => (
    <div className="reg-input-wrap">
      <input
        type={show ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`reg-input reg-input--password ${errors[name] ? 'reg-input--error' : ''}`}
      />
      <button
        type="button"
        className="reg-eye-btn"
        onClick={onToggle}
        aria-label={show ? 'Hide password' : 'Show password'}
      >
        {show ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  );

  return (
    <div className="reg-page">

      {/* Top red bar */}
      <div className="reg-topbar" />

      {/* Header */}
      <div className="reg-header">
      <img src={logo} alt="Doki Logo" className="reg-header-logo" />
        <div>
          <p className="reg-header-title">CUSTOMER REGISTRATION</p>
          <p className="reg-header-sub">Create your Doki account</p>
        </div>
      </div>

      {/* Body */}
      <div className="reg-body">
        <div className="reg-card">

          {/* Avatar */}
          <div className="reg-avatar-wrap">
            <div className="reg-avatar">
              <svg className="reg-avatar-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>

          {/* ── Fields ── */}
          <div className="reg-fields">

            {/* Username */}
            <div className="reg-field">
              <label className="reg-label">USER NAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => handleChange('username', e.target.value, setUsername)}
                onBlur={(e) => handleBlur('username', e.target.value)}
                placeholder="Choose a username"
                className={`reg-input ${errors.username ? 'reg-input--error' : ''}`}
              />
              {errors.username && <span className="reg-error">{errors.username}</span>}
            </div>

            {/* Password */}
            <div className="reg-field">
              <label className="reg-label">PASSWORD</label>
              <PasswordInput
                name="password"
                value={password}
                onChange={(e) => handleChange('password', e.target.value, setPassword)}
                onBlur={(e) => handleBlur('password', e.target.value)}
                show={showPassword}
                onToggle={() => setShowPassword((p) => !p)}
                placeholder="Create a password"
              />
              {/* Strength meter */}
              {password.length > 0 && (
                <div className="reg-strength">
                  <div className="reg-strength-bars">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="reg-strength-bar"
                        style={{ background: i <= strength.score ? strength.color : '#e5e5e5' }}
                      />
                    ))}
                  </div>
                  <span className="reg-strength-label" style={{ color: strength.color }}>
                    {strength.label}
                  </span>
                </div>
              )}
              {errors.password && <span className="reg-error">{errors.password}</span>}
            </div>

            {/* Confirm Password */}
            <div className="reg-field">
              <label className="reg-label">CONFIRM PASSWORD</label>
              <PasswordInput
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value, setConfirm)}
                onBlur={(e) => handleBlur('confirmPassword', e.target.value)}
                show={showConfirm}
                onToggle={() => setShowConfirm((p) => !p)}
                placeholder="Repeat password"
              />
              {/* Match indicator */}
              {confirmPassword.length > 0 && !errors.confirmPassword && (
                <span className="reg-match">✓ Passwords match</span>
              )}
              {errors.confirmPassword && <span className="reg-error">{errors.confirmPassword}</span>}
            </div>

            {/* Email */}
            <div className="reg-field">
              <label className="reg-label">EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleChange('email', e.target.value, setEmail)}
                onBlur={(e) => handleBlur('email', e.target.value)}
                placeholder="your@email.com"
                className={`reg-input ${errors.email ? 'reg-input--error' : ''}`}
              />
              {errors.email && <span className="reg-error">{errors.email}</span>}
            </div>

            {/* Contact */}
            <div className="reg-field">
              <label className="reg-label">CONTACT NUMBER</label>
              <input
                type="tel"
                value={contact}
                onChange={(e) => handleChange('contact', e.target.value, setContact)}
                onBlur={(e) => handleBlur('contact', e.target.value)}
                placeholder="+63 9XX XXX XXXX"
                className={`reg-input ${errors.contact ? 'reg-input--error' : ''}`}
              />
              {errors.contact && <span className="reg-error">{errors.contact}</span>}
            </div>

            {/* Address */}
            <div className="reg-field">
              <label className="reg-label">CONTACT ADDRESS</label>
              <input
                type="text"
                value={address}
                onChange={(e) => handleChange('address', e.target.value, setAddress)}
                onBlur={(e) => handleBlur('address', e.target.value)}
                placeholder="Street, Barangay, City"
                className={`reg-input ${errors.address ? 'reg-input--error' : ''}`}
              />
              {errors.address && <span className="reg-error">{errors.address}</span>}
            </div>

          </div>
          {/* ── End Fields ── */}

          {/* Divider */}
          <div className="reg-divider" />

          {/* Buttons */}
          <div className="reg-actions">
            <button className="reg-btn-primary" onClick={handleSubmit}>CONFIRM</button>
            <button className="reg-btn-cancel" onClick={() => navigate('/')}>CANCEL</button>
          </div>

          {/* Login link */}
          <p className="reg-login-text">
            Already have an account?{' '}
            <span className="reg-login-link" onClick={() => navigate('/login')}>Log In</span>
          </p>

        </div>
      </div>

      {/* Bottom red bar */}
      <div className="reg-topbar" />
    </div>
  );
};

export default RegisterPage;