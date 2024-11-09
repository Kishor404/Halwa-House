import "./components.css";

const ProductInfo = () => {
    // Product details
    const product = {
      name: "Gulab Jamun",
      price: "₹1299 per kg",
      ratingValue: 4.5, // Numeric rating
      ratingCount: 413,
      description: "Each bite reveals a soft, syrup-soaked center, making it a favorite among sweet lovers. Crafted with authentic ingredients, it promises a rich flavor that lingers on your palate.",
      imageSrc: "gulab-jamuns.png" // Image source
    };
  
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
          src={product.imageSrc}
          alt={product.name}
          className="product-card-image"
        />
        <div className="product-card-content">
          <h2 className="product-card-title">{product.name}</h2>
          <p className="product-card-price">{product.price}</p>
          <div className="product-card-rating-contain">
            <span className="product-card-rating-star">{getStarRating(product.ratingValue)}</span>
            <span className="product-card-rating-number">({product.ratingCount})</span>
          </div>
          <p className="product-card-description">
            {product.description}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProductInfo;