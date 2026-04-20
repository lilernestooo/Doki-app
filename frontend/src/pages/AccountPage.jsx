import React, { useState, useEffect, useCallback } from 'react';

/* ─────────────────────────────────────────
   localStorage keys & defaults
───────────────────────────────────────── */
const PROFILE_KEY = 'doki_profile';
const AUTH_KEY    = 'doki_auth';

const DEFAULT_PROFILE = {
  displayName:   '',
  username:      '',
  bio:           '',
  email:         '',
  location:      '',
  website:       '',
  contactNumber: '',
  address:       '',
};

/* ── Icons (Feather-style SVG paths) ── */
const ICONS = {
  username:      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  displayName:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  email:         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>,
  contactNumber: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l1.17-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  address:       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  location:      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  website:       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  bio:           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
};

/* ─────────────────────────────────────────
   Auth loader — supports BOTH formats:
   1. doki_auth = JSON { username, email }
   2. plain username / email keys (login page)
───────────────────────────────────────── */
function loadAuth() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (raw) return JSON.parse(raw);
    // ✅ fallback: plain keys saved by your login page
    const u = localStorage.getItem('username');
    const e = localStorage.getItem('email') || '';
    if (u) return { username: u, email: e };
  } catch {}
  return null;
}

function loadProfile(auth) {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    const saved = raw ? JSON.parse(raw) : {};
    return {
      ...DEFAULT_PROFILE,
      displayName: auth?.username ?? '',
      username:    auth?.username ?? '',
      email:       auth?.email    ?? '',
      ...saved,
    };
  } catch { return { ...DEFAULT_PROFILE }; }
}

function saveProfile(data) {
  try { localStorage.setItem(PROFILE_KEY, JSON.stringify(data)); } catch {}
}

function toInitials(name) {
  if (!name) return '?';
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

/* ─────────────────────────────────────────
   Field config
───────────────────────────────────────── */
const FIELDS = [
  { key: 'username',      label: 'User Name',       type: 'text',  placeholder: 'e.g. lilernestooo' },
  { key: 'displayName',   label: 'Display Name',    type: 'text',  placeholder: 'Your full name' },
  { key: 'email',         label: 'Email Address',   type: 'email', placeholder: 'you@example.com' },
  { key: 'contactNumber', label: 'Contact Number',  type: 'tel',   placeholder: '+63 900 000 0000' },
  { key: 'address',       label: 'Contact Address', type: 'text',  placeholder: 'Street, City, Country' },
  { key: 'location',      label: 'Location',        type: 'text',  placeholder: 'City, Country' },
  { key: 'website',       label: 'Website',         type: 'url',   placeholder: 'https://yoursite.com' },
  { key: 'bio',           label: 'Bio',             type: 'text',  placeholder: 'Tell us about yourself…' },
];

/* ═══════════════════════════════════════
   Styles
═══════════════════════════════════════ */
const S = {
  page: {
    minHeight: '100vh',
    background: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '32px 16px 80px',
    fontFamily: "'Nunito', sans-serif",
  },
  shell: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0 12px 48px rgba(0,0,0,0.18)',
  },
  header: {
    background: '#111',
    padding: '28px 24px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  brandIcon: {
    width: 28,
    height: 28,
    color: '#E32636',
  },
  brandText: {
    fontFamily: "'Bebas Neue', 'Impact', monospace",
    fontSize: 26,
    letterSpacing: '0.06em',
    color: '#fff',
    lineHeight: 1,
  },
  redStripe: {
    background: '#E32636',
    width: '100%',
    textAlign: 'center',
    padding: '6px 0',
    fontFamily: "'Bebas Neue', 'Impact', monospace",
    fontSize: 11,
    letterSpacing: '0.35em',
    color: 'rgba(255,255,255,0.9)',
    marginTop: 2,
  },
  avatarRing: {
    width: 96,
    height: 96,
    borderRadius: '50%',
    padding: 3,
    background: 'conic-gradient(#E32636, #ff6b6b, #E32636, #991824, #E32636)',
    marginBottom: 6,
    marginTop: 4,
  },
  avatarInner: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: '#1e1e1e',
    border: '3px solid #111',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontFamily: "'Bebas Neue', 'Impact', monospace",
    fontSize: 30,
    color: '#E32636',
    letterSpacing: '0.05em',
  },
  headerName: {
    fontFamily: "'Bebas Neue', 'Impact', monospace",
    fontSize: 20,
    color: '#fff',
    letterSpacing: '0.08em',
    margin: 0,
  },
  headerSub: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.4)',
    margin: 0,
  },
  body: {
    background: '#fff',
    padding: '0 0 8px',
  },
  sectionLabel: {
    background: '#E32636',
    color: 'rgba(255,255,255,0.9)',
    fontFamily: "'Bebas Neue', 'Impact', monospace",
    fontSize: 10,
    letterSpacing: '0.3em',
    padding: '7px 20px',
  },
  row: (open) => ({
    borderBottom: '1px solid #f0f0f0',
    background: open ? '#fff8f8' : '#fff',
    transition: 'background 0.2s',
  }),
  rowHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '13px 18px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  rowIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#888',
  },
  rowIconSvg: {
    width: 16,
    height: 16,
  },
  rowLabel: {
    fontFamily: "'Bebas Neue', 'Impact', monospace",
    fontSize: 9,
    letterSpacing: '0.22em',
    color: '#E32636',
    flexShrink: 0,
    width: 120,
  },
  rowValue: {
    flex: 1,
    fontSize: 12,
    fontWeight: 700,
    color: '#222',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    letterSpacing: '0.02em',
  },
  rowValueEmpty: {
    color: '#ccc',
    fontWeight: 400,
    fontStyle: 'italic',
    fontSize: 11,
  },
  chevron: (open) => ({
    width: 12,
    height: 12,
    color: '#E32636',
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.25s',
    marginLeft: 4,
    flexShrink: 0,
  }),
  rowBody: (open) => ({
    maxHeight: open ? 80 : 0,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
    padding: open ? '0 18px 14px 54px' : '0 18px 0 54px',
  }),
  input: {
    width: '100%',
    border: 'none',
    borderBottom: '2px solid #E32636',
    outline: 'none',
    fontFamily: "'Nunito', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: '#111',
    padding: '4px 0',
    background: 'transparent',
    letterSpacing: '0.02em',
    boxSizing: 'border-box',
  },
  footer: {
    background: '#fff',
    padding: '16px 20px 24px',
    display: 'flex',
    gap: 12,
  },
  cancelBtn: {
    flex: 1,
    background: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: 50,
    padding: '14px 0',
    cursor: 'pointer',
    fontFamily: "'Bebas Neue', 'Impact', monospace",
    fontSize: 13,
    letterSpacing: '0.25em',
    transition: 'background 0.2s',
  },
  saveBtn: (saved) => ({
    flex: 1,
    background: saved ? '#2a9d5c' : '#E32636',
    color: '#fff',
    border: 'none',
    borderRadius: 50,
    padding: '14px 0',
    cursor: 'pointer',
    fontFamily: "'Bebas Neue', 'Impact', monospace",
    fontSize: 13,
    letterSpacing: '0.25em',
    transition: 'background 0.2s',
  }),
  toast: (visible) => ({
    position: 'fixed',
    bottom: visible ? 28 : -60,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#111',
    color: '#fff',
    padding: '10px 22px',
    borderRadius: 50,
    fontSize: 12,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    transition: 'bottom 0.35s cubic-bezier(.22,1,.36,1)',
    zIndex: 999,
    boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
    whiteSpace: 'nowrap',
  }),
  toastDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#2a9d5c',
    flexShrink: 0,
  },
};

/* ═══════════════════════════════════════
   AccordionField
═══════════════════════════════════════ */
function AccordionField({ field, value, onChange }) {
  const [open, setOpen] = useState(false);
  const isEmpty = !value;

  return (
    <div style={S.row(open)}>
      <div style={S.rowHeader} onClick={() => setOpen(o => !o)}>
        <span style={S.rowIcon}>
          {React.cloneElement(ICONS[field.key], { style: S.rowIconSvg })}
        </span>
        <span style={S.rowLabel}>{field.label}</span>
        <span style={isEmpty ? S.rowValueEmpty : S.rowValue}>
          {isEmpty ? '—' : value}
        </span>
        <span style={S.chevron(open)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#E32636" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </div>
      <div style={S.rowBody(open)}>
        <input
          style={S.input}
          type={field.type}
          value={value}
          onChange={e => onChange(field.key, e.target.value)}
          placeholder={field.placeholder}
          maxLength={field.key === 'bio' ? 160 : 100}
          autoComplete="off"
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   Main Component
═══════════════════════════════════════ */
export default function AccountPage() {
  const auth = loadAuth();
  const [profile, setProfile] = useState(() => loadProfile(auth));
  const [draft,   setDraft]   = useState({ ...loadProfile(auth) });
  const [saved,   setSaved]   = useState(false);
  const [toast,   setToast]   = useState(false);

  useEffect(() => {
    const onStorage = () => {
      const latest = loadProfile(loadAuth());
      setProfile(latest);
      setDraft({ ...latest });
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleChange = useCallback((key, value) => {
    setDraft(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleCancel = useCallback(() => {
    setDraft({ ...profile });
  }, [profile]);

  const handleSave = useCallback(() => {
    const updated = { ...draft };
    setProfile(updated);
    saveProfile(updated);
    setSaved(true);
    setToast(true);
    setTimeout(() => setSaved(false), 2200);
    setTimeout(() => setToast(false), 2800);
  }, [draft]);

  const displayName = profile.displayName || profile.username || 'User';

  return (
    <div style={S.page}>
      <div style={S.shell}>

        {/* Header */}
        <div style={S.header}>
          <div style={S.brandRow}>
            <svg style={S.brandIcon} viewBox="0 0 24 24" fill="none" stroke="#E32636" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
              <line x1="6" y1="1" x2="6" y2="4"/>
              <line x1="10" y1="1" x2="10" y2="4"/>
              <line x1="14" y1="1" x2="14" y2="4"/>
            </svg>
            <div>
              <div style={S.brandText}>Customer</div>
              <div style={{ ...S.brandText, fontSize: 22 }}>Registration</div>
            </div>
          </div>

          {/* Avatar */}
          <div style={S.avatarRing}>
            <div style={S.avatarInner}>
              <span style={S.avatarInitials}>{toInitials(displayName)}</span>
            </div>
          </div>

          <p style={S.headerName}>{displayName}</p>
          {(profile.email || auth?.email) && (
            <p style={S.headerSub}>{profile.email || auth?.email}</p>
          )}
        </div>

        {/* Red stripe */}
        <div style={S.redStripe}>PROFILE INFORMATION</div>

        {/* Accordion fields */}
        <div style={S.body}>
          {FIELDS.map(field => (
            <AccordionField
              key={field.key}
              field={field}
              value={draft[field.key] ?? ''}
              onChange={handleChange}
            />
          ))}
        </div>

        {/* Buttons */}
        <div style={S.footer}>
          <button
            style={S.cancelBtn}
            onClick={handleCancel}
            onMouseEnter={e => e.currentTarget.style.background = '#E32636'}
            onMouseLeave={e => e.currentTarget.style.background = '#111'}
          >
            CANCEL
          </button>
          <button style={S.saveBtn(saved)} onClick={handleSave}>
            {saved ? '✓ SAVED' : 'CONFIRM'}
          </button>
        </div>

      </div>

      {/* Toast */}
      <div style={S.toast(toast)}>
        <span style={S.toastDot} />
        Profile saved successfully
      </div>
    </div>
  );
}