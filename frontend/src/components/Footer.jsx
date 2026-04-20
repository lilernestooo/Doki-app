import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      background: '#111111',
      borderTop: '3px solid #E32636',
      padding: '18px 0 12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
    }}>

      {/* Social Icons Row */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>

        {/* Facebook */}
        <a href="#" aria-label="Facebook" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#1877F2'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" aria-label="Instagram" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#E1306C'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
        </a>

        {/* Gmail */}
        <a href="mailto:dokicafe@gmail.com" aria-label="Gmail" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#EA4335'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
          </svg>
        </a>

      </div>

      {/* Divider */}
      <div style={{
        width: '40px',
        height: '2px',
        background: '#E32636',
        borderRadius: '2px',
        opacity: 0.4,
      }} />

      {/* Copyright */}
      <p style={{
        fontSize: '9px',
        color: 'rgba(255,255,255,0.25)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        fontWeight: 600,
        margin: 0,
      }}>
        © 2026 Doki Café · All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;