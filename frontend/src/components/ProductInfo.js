import React from "react";
import "./components.css"; // Import your custom styles
import "../Styles/ProductInfo.css"; // Add your specific styles here

const ProductInfo = () => {
  const product = {
    name: "Gulab Jamun",
    description:
      "Each bite reveals a soft, syrup-soaked center, making it a favorite among sweet lovers. Crafted with authentic ingredients, it promises a rich flavor that lingers on your palate.",
    rating: 4.5,
    reviews: 85,
    discount: 35,
    originalPrice: 360,
    price: 200,
    weightOptions: ["1 Kg", "2 Kg", "3 Kg"],
    selectedWeight: "2 Kg",
    stock: 30,
    image: "./images/aboutpage3.png",
  };

  const deliveryInfo = {
    franchise: "Chennai",
    deliveryLocation: "Unnamed City",
    recipientName: "MS Dhoni",
    address: "404, Unknown Street, City Not Found, Tamilnadu - 609 404",
    phone: "+91 9876543210",
    deliveryTime: "2 Days",
  };

  return (
    <div className="page-container">
      {/* Product Details Section */}
      <div className="product-container">
        <div className="product-details">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-rating">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
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
                  className={`weight-button ${product.selectedWeight === weight ? "active" : ""
                    }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="order-summary-container">
        <div className="order-summary">
          <div className="row">
            <div className="cl1">
              <div className="order-info">
                <h3>{product.name}</h3>
                <p>{product.stock} Kg Left Now!</p>
                <p>Size Selected: {product.selectedWeight}</p>
                <div className="order-price">
                  <span className="original-price">₹ {product.originalPrice}</span>
                  <span className="final-price">₹ {product.price}</span>
                </div>
              </div>
            </div>

            <div className="cl2">
              <div className="delivery-info">
                <p>
                  <strong>Nearby Franchise:</strong> {deliveryInfo.franchise}
                </p>
                <p>
                  <strong>Delivery To:</strong> {deliveryInfo.deliveryLocation}
                </p>
                <p>
                  <strong>Name:</strong> {deliveryInfo.recipientName}
                </p>
              </div>
              <p className="delivery-time">Get Delivery By {deliveryInfo.deliveryTime}</p>
            </div>

            <div className="cl3">
              <div className="delivery-address">
                <p1>
                <strong></strong> {deliveryInfo.recipientName}
                </p1>
                <p>{deliveryInfo.address}</p>
                <p>{deliveryInfo.phone}</p>

              </div>
             
            </div>

            <div className="cl4">
              <button className="buy-now-button">Buy Now</button>
              <button className="add-to-cart-button">Add To Cart</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
