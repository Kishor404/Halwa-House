import "./components.css";
import React from 'react';
import "../Styles/ProductInfo.css";

const ProductInfo = () => {
    const product = {
        name: "Gulab Jamun",
        description: "Each bite reveals a soft, syrup-soaked center, making it a favorite among sweet lovers. Crafted with authentic ingredients, it promises a rich flavor that lingers on your palate.",
        rating: 4.5,
        reviews: 85,
        discount: 35,
        price: 200,
        weightOptions: ["1 Kg", "2 Kg", "3 Kg"],
        selectedWeight: "2 Kg",
        image: "gulab-jamuns.png"
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-rating">
                {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
                <span className="review-count">{product.reviews} reviews</span>
            </div>
            <div className="product-price">
                <span className="discount">-{product.discount}%</span>
                <span className="price">₹ {product.price}</span>
            </div>
            <div className="weight-options">
                {product.weightOptions.map((weight) => (
                    <button 
                        key={weight} 
                        className={`weight-button ${product.selectedWeight === weight ? "active" : ""}`}
                    >
                        {weight}
                    </button>
                ))}
            </div>
        </div>
    );
};
  
  export default ProductInfo;