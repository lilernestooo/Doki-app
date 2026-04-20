import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

/**
 * ProductCard — unified card for all three contexts:
 *
 * variant="best-seller"  → used in the horizontal best-seller strip
 * variant="grid"         → standard bento cell (1 column)
 * variant="wide"         → featured bento cell (spans 2 columns, horizontal layout)
 *
 * Props:
 *   product  { id, name, price, tag?, image }
 *   variant  'grid' | 'wide' | 'best-seller'
 *   index    number — used for staggered fade-up animation delay
 */
const ProductCard = ({ product, variant = 'grid', index = 0 }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className={`product-card product-card--${variant}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
        />
        {/* ribbon tag on image — shown on best-seller variant */}
        {product.tag && (
          <span className="product-card__ribbon">{product.tag}</span>
        )}
      </div>

      <div className="product-card__info">
        {/* badge inside info block — shown on grid & wide variants */}
        {product.tag && (
          <span className="product-card__badge">{product.tag}</span>
        )}
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">₱{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;