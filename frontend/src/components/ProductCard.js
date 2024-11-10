import React from 'react';
import "./components.css";
import "../Styles/ProductInfo.css";

const ProductInfo = () => {
  // Assigning values to variables
  const name = "Gulab Jamun";
  const price = "₹1299 per kg";
  const ratingValue = 2; // Numeric rating
  const ratingCount = 413;
  const description = "Each bite reveals a soft, syrup-soaked center, making it a favorite among sweet lovers. Crafted with authentic ingredients, it promises a rich flavor that lingers on your palate.";
  const imageSrc = "gulab-jamuns.png"; // Image source variable

  // Generate star rating based on the numeric value
  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? "★" : "";
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return "★".repeat(fullStars) + halfStar + "☆".repeat(emptyStars);
  };

  return (
    <div className="product-card">
      <img
        src={imageSrc}
        alt={name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h2 className="product-card-title">{name}</h2>
        <p className="product-card-price">{price}</p>
        <div className="product-card-rating-contain">
          <span className="product-card-rating-star">{getStarRating(ratingValue)}</span>
          <span className="product-card-rating-number">({ratingCount})</span>
        </div>
        <p className="product-card-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
