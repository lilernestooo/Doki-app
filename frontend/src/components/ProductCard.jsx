import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const isEmoji = (str) => /^\p{Emoji}/u.test(str);

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
        {product.tag && (
          isEmoji(product.tag)
            ? <span className="product-card__ribbon--emoji">{product.tag}</span>
            : <span className="product-card__ribbon">{product.tag}</span>
        )}
      </div>

      <div className="product-card__info">
        {product.tag && !isEmoji(product.tag) && (
          <span className="product-card__badge">{product.tag}</span>
        )}
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">₱{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;