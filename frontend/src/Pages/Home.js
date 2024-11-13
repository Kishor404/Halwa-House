import ProductCard from "../components/ProductCard";
import "../Styles/Home.css";
import "../Styles/Styles.css";
import { Link } from 'react-router-dom';

import "../Styles/ProductCard.css";

const Home = () => {
    // Array of images for the "Special Sweet" section
    const specialSweetImages = [
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png"
    ];
  
    // Array of images for the "Sweet Corner" section
    const HalwaCornerImages = [
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png",
      "/Images/gulab-jamuns.png"
    ];

    const sweetCornerImages = [
        "/Images/gulab-jamuns.png",
        "/Images/gulab-jamuns.png",
        "/Images/gulab-jamuns.png",
        "/Images/gulab-jamuns.png",
        "/Images/gulab-jamuns.png",
        "/Images/gulab-jamuns.png"
      ];
    const HeaderImages= "/Images/homeheader.png"
  
    return (
      <div className="home-page">
        {/* Header Section */}
        
          <div className="header-images">
            <img src={HeaderImages} alt="Main Sweets" className="main-image" />
            
          </div>
        
  
        {/* Special Sweet Section */}
        <div className="section">
            <div className="sectionheader1">
            <h2>Special Sweet</h2>

            </div>
          
          <div className="product-grid">
            {specialSweetImages.map((imageSrc, index) => (
              <ProductCard key={index} imageSrc={imageSrc} />
            ))}
          </div>
          <button className="view-more-button">View More</button>
        </div>
  
        {/* Sweet Corner Section */}
        <div className="section">
        
            <div className="sectionheader2">
                <h2>Halwa Corner</h2>
            </div>
         <div className="product-grid">
            {HalwaCornerImages.map((imageSrc, index) => (
              <ProductCard key={index} imageSrc={imageSrc} />
            ))}
          </div>
          <Link to="/Halwa">
          <button className="view-more-button">View More</button>

          </Link>
        </div>

        {/* Halwa */}
        <div className="section">
            <div className="sectionheader2">
                <h2>Sweet Corner</h2>

            </div>
          
          <div className="product-grid">
            {sweetCornerImages.map((imageSrc, index) => (
              <ProductCard key={index} imageSrc={imageSrc} />
            ))}
          </div>
          <Link to="/sweets">
          <button className="view-more-button">View More</button>

          </Link>
        </div>
          
          
      </div>
    );
  };
  
  export default Home;