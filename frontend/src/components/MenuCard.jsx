import React from 'react';

import baristaImg from '../assets/Barista.png';

const styles = `
.menu-splash {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
  background: #f5f5f5;
  padding: 32px 24px;
  gap: 18px;
}
.menu-splash__eyebrow {
  font-family: 'Bebas Neue', 'Impact', monospace;
  font-size: 10px;
  letter-spacing: 0.28em;
  color: #999;
  text-align: center;
}
.menu-splash__headline {
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #111;
  text-align: center;
  line-height: 1.3;
}
.menu-card {
  background: #111111;
  border: 2px solid #E32636;
  border-radius: 12px;
  width: 100%;
  max-width: 280px;
  padding: 22px 20px 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.15s ease, border-color 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}
.menu-card:active { transform: scale(0.97); }
.menu-card:hover { border-color: #ff4d5a; }
.menu-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
}
.menu-card__ribbon {
  font-family: 'Bebas Neue', 'Impact', monospace;
  font-size: 9px;
  letter-spacing: 0.3em;
  color: #E32636;
  margin-bottom: 10px;
}
.menu-card__art {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1c1c1c;
  border: 1.5px solid #2a2a2a;
  border-radius: 8px;
  height: 160px;
  margin-bottom: 16px;
  overflow: hidden;
}
.menu-card__art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}
.menu-card__body { margin-bottom: 18px; }
.menu-card__title {
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  font-size: 30px;
  letter-spacing: 0.04em;
  color: #ffffff;
  line-height: 1.05;
  margin-bottom: 4px;
}
.menu-card__sub {
  font-family: 'Bebas Neue', 'Impact', monospace;
  font-size: 8.5px;
  letter-spacing: 0.22em;
  color: #555;
}
.menu-card__btn {
  width: 100%;
  background: #E32636;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 11px 0;
  font-family: 'Bebas Neue', 'Impact', monospace;
  font-size: 11px;
  letter-spacing: 0.25em;
  cursor: pointer;
  transition: background 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.menu-card__btn:hover { background: #c01f2e; }
.menu-card__arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}
.menu-card__btn:hover .menu-card__arrow { transform: translateX(4px); }
.menu-splash__hint {
  font-family: 'Bebas Neue', 'Impact', monospace;
  font-size: 8px;
  letter-spacing: 0.2em;
  color: #bbb;
  text-align: center;
}
`;

const MenuCard = ({ onEnter }) => {
  return (
    <>
      <style>{styles}</style>
      <div className="menu-splash">
        <div className="menu-splash__eyebrow">DOKI CAFÉ · ANGELES CITY</div>
        <div className="menu-splash__headline">
          What are you<br />having today?
        </div>

        <div className="menu-card" onClick={onEnter}>
          <div className="menu-card__ribbon">SEASONAL MENU</div>

          <div className="menu-card__art">
            <img
              src={baristaImg}
              alt="Barista preparing pour-over coffee"
            />
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
    </>
  );
};

export default MenuCard;