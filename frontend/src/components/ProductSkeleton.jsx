import React from 'react';
import '../styles/ProductSkeleton.css';

/* Reusable shimmer block */
const Skel = ({ className = '', style = {} }) => (
  <div className={`skel ${className}`} style={style} aria-hidden="true" />
);

const ProductSkeleton = () => (
  <div className="skel-page" role="status" aria-label="Loading products…">

    {/* ── Best seller section ── */}
    <div className="skel-banner" />

    <div className="skel-bs-strip">
      {[0, 1, 2, 3].map((i) => (
        <div className="skel-bs-card" key={i}>
          <Skel className="skel-bs-img" />
          <Skel className="skel-line" style={{ width: '72px' }} />
          <Skel className="skel-line" style={{ width: '38px' }} />
        </div>
      ))}
    </div>

    <div className="skel-dots">
      <span className="skel-dot skel-dot--on" />
      <span className="skel-dot" />
      <span className="skel-dot" />
    </div>

    {/* ── Category filter ── */}
    <div className="skel-cat-bar">
      {[44, 54, 76, 58].map((w, i) => (
        <Skel key={i} className="skel-line skel-cat-item" style={{ width: w }} />
      ))}
    </div>

    {/* ── Section header ── */}
    <div className="skel-banner skel-banner--sm" />

    {/* ── Bento grid ── */}
    <div className="skel-bento">
      {/* row 1: two normal cells */}
      <div className="skel-bento-cell">
        <Skel className="skel-bento-img" />
        <Skel className="skel-line" style={{ width: '70%' }} />
        <Skel className="skel-line" style={{ width: '35%' }} />
      </div>
      <div className="skel-bento-cell">
        <Skel className="skel-bento-img" />
        <Skel className="skel-line" style={{ width: '70%' }} />
        <Skel className="skel-line" style={{ width: '35%' }} />
      </div>

      {/* row 2: wide featured cell */}
      <div className="skel-bento-cell skel-bento-cell--wide">
        <Skel className="skel-bento-img skel-bento-img--wide" />
        <div className="skel-bento-info">
          <Skel className="skel-line" style={{ width: '80%' }} />
          <Skel className="skel-line" style={{ width: '40%' }} />
        </div>
      </div>

      {/* row 3: two normal */}
      <div className="skel-bento-cell">
        <Skel className="skel-bento-img" />
        <Skel className="skel-line" style={{ width: '70%' }} />
        <Skel className="skel-line" style={{ width: '35%' }} />
      </div>
      <div className="skel-bento-cell">
        <Skel className="skel-bento-img" />
        <Skel className="skel-line" style={{ width: '70%' }} />
        <Skel className="skel-line" style={{ width: '35%' }} />
      </div>

      {/* row 4: wide */}
      <div className="skel-bento-cell skel-bento-cell--wide">
        <Skel className="skel-bento-img skel-bento-img--wide" />
        <div className="skel-bento-info">
          <Skel className="skel-line" style={{ width: '80%' }} />
          <Skel className="skel-line" style={{ width: '40%' }} />
        </div>
      </div>
    </div>
  </div>
);

export default ProductSkeleton;