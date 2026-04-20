import React from 'react';
import '../styles/MenuCard.css';

const MenuCard = ({ onEnter }) => {
  return (
    <div className="menu-splash">
      <div className="menu-splash__eyebrow">DOKI CAFÉ · CALAPAN CITY</div>
      <div className="menu-splash__headline">
        What are you<br />having today?
      </div>

      <div className="menu-card" onClick={onEnter}>
        <div className="menu-card__ribbon">SEASONAL MENU</div>

        <div className="menu-card__art">
          <svg width="72" height="80" viewBox="0 0 72 80" fill="none" aria-hidden="true">
            <rect x="12" y="10" width="48" height="50" rx="6" fill="#E32636" fillOpacity=".18" />
            <rect x="17" y="15" width="38" height="40" rx="3" fill="#E32636" fillOpacity=".25" />
            <path d="M12 55 C12 68 60 68 60 55" fill="#E32636" fillOpacity=".3" />
            <rect x="24" y="62" width="24" height="6" rx="3" fill="#E32636" fillOpacity=".4" />
            <path
              d="M60 24 Q76 24 76 33 Q76 42 60 42"
              stroke="#E32636"
              strokeWidth="3"
              fill="none"
              strokeOpacity=".35"
              strokeLinecap="round"
            />
            <line x1="26" y1="4"  x2="28" y2="10" stroke="#E32636" strokeWidth="2" strokeOpacity=".5" strokeLinecap="round" />
            <line x1="36" y1="2"  x2="36" y2="9"  stroke="#E32636" strokeWidth="2" strokeOpacity=".5" strokeLinecap="round" />
            <line x1="46" y1="4"  x2="44" y2="10" stroke="#E32636" strokeWidth="2" strokeOpacity=".5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="menu-card__body">
          <div className="menu-card__title">
            Our Drinks<br />&amp; Bites
          </div>
          <div className="menu-card__sub">CRAFTED WITH LOVE</div>
        </div>

        <button className="menu-card__btn" onClick={onEnter}>
          VIEW MENU <span className="menu-card__arrow">→</span>
        </button>
      </div>

      <p className="menu-splash__hint">TAP CARD TO BROWSE</p>
    </div>
  );
};

export default MenuCard;