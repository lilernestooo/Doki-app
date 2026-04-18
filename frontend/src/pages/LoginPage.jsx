import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [touched, setTouched] = useState({ username: false, password: false });


  const validate = () => {
    const newErrors = { username: '', password: '' };
    if (!username.trim()) newErrors.username = 'Username is required.';
    if (!password.trim()) newErrors.password = 'Password is required.';
    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = { ...errors };
    if (field === 'username' && !username.trim()) newErrors.username = 'Username is required.';
    if (field === 'username' && username.trim()) newErrors.username = '';
    if (field === 'password' && !password.trim()) newErrors.password = 'Password is required.';
    if (field === 'password' && password.trim()) newErrors.password = '';
    setErrors(newErrors);
  };

  const handleLogin = () => {
    setTouched({ username: true, password: true });
    if (validate()) {
      navigate('/home');
    }
  };

  // ── Eye icon SVG ───────────────────────────────────────
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

  return (
    <div className="login-page">

      {/* Top red bar */}
      <div className="login-topbar" />

      {/* Header */}
      <div className="login-header">
        <img
          src="/src/assets/logo (3).png"
          alt="Doki Logo"
          className="login-header-logo"
        />
        <div>
          <p className="login-header-title">CUSTOMER LOGIN</p>
          <p className="login-header-sub">Welcome back to Doki Café</p>
        </div>
      </div>

      {/* Page body */}
      <div className="login-body">

        {/* Form Card */}
        <div className="login-card">

          {/* Avatar */}
          <div className="login-avatar-wrap">
            <div className="login-avatar">
              <svg className="login-avatar-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>

          {/* Inputs */}
          <div className="login-fields">

            {/* Username */}
            <div className="login-field">
              <label className="login-label">USER NAME</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (touched.username && e.target.value.trim()) {
                    setErrors((prev) => ({ ...prev, username: '' }));
                  }
                }}
                onBlur={() => handleBlur('username')}
                placeholder="Enter your username"
                className={`login-input ${errors.username ? 'login-input--error' : ''}`}
              />
              {errors.username && (
                <span className="login-error-msg">{errors.username}</span>
              )}
            </div>

            {/* Password */}
            <div className="login-field">
              <label className="login-label">PASSWORD</label>
              <div className="login-input-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (touched.password && e.target.value.trim()) {
                      setErrors((prev) => ({ ...prev, password: '' }));
                    }
                  }}
                  onBlur={() => handleBlur('password')}
                  placeholder="Enter your password"
                  className={`login-input login-input--password ${errors.password ? 'login-input--error' : ''}`}
                />
                <button
                  type="button"
                  className="login-eye-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {errors.password && (
                <span className="login-error-msg">{errors.password}</span>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="login-divider" />

          {/* Buttons */}
          <div className="login-actions">
            <button className="login-btn-primary" onClick={handleLogin}>
              LOG IN
            </button>
            <button className="login-btn-cancel" onClick={() => navigate('/')}>
              CANCEL
            </button>
          </div>

          {/* Register link */}
          <p className="login-register-text">
            Don't have an account?{' '}
            <span className="login-register-link" onClick={() => navigate('/register')}>
              Sign Up
            </span>
          </p>

        </div>
        {/* End Form Card */}

      </div>

      {/* Bottom red bar */}
      <div className="login-topbar" />
    </div>
  );
};

export default LoginPage;