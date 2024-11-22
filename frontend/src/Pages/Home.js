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

      let Halwa = [
        ["/Images/gulab-jamuns.png", "Carrot Halwa", "$200"],
        ["/Images/gulab-jamuns.png", "Badam Halwa", "$250"],
        ["/Images/gulab-jamuns.png", "Moong Dal Halwa", "$220"],
        ["/Images/gulab-jamuns.png", "Ashoka Halwa", "$210"],
        ["/Images/gulab-jamuns.png", "Tirunelveli Halwa", "$300"],
        ["/Images/gulab-jamuns.png", "Milk Halwa", "$190"],
        ["/Images/gulab-jamuns.png", "Beetroot Halwa", "$200"],
        ["/Images/gulab-jamuns.png", "Pineapple Halwa", "$230"],
        ["/Images/gulab-jamuns.png", "Sooji Halwa", "$180"],
        ["/Images/gulab-jamuns.png", "Coconut Halwa", "$240"]
    ];
    let Sweets = [
      ["/Images/gulab-jamuns.png", "Halwa", "$200"],
      ["/Images/gulab-jamuns.png", "Laddo", "$100"],
      ["/Images/gulab-jamuns.png", "Barfi", "$150"],
      ["/Images/gulab-jamuns.png", "Jalebi", "$180"],
      ["/Images/gulab-jamuns.png", "Rasgulla", "$120"],
      ["/Images/gulab-jamuns.png", "Peda", "$160"],
      ["/Images/gulab-jamuns.png", "Kaju Katli", "$250"],
      ["/Images/gulab-jamuns.png", "Motichoor Laddo", "$220"],
      ["/Images/gulab-jamuns.png", "Besan Laddo", "$110"],
      ["/Images/gulab-jamuns.png", "Milk Cake", "$170"]
  ];
  let SpeSweets = [
    ["/Images/gulab-jamuns.png", "Halwa", "$200"],
    ["/Images/gulab-jamuns.png", "Laddo", "$100"],
    ["/Images/gulab-jamuns.png", "Barfi", "$150"],
    ["/Images/gulab-jamuns.png", "Jalebi", "$180"],
    ["/Images/gulab-jamuns.png", "Rasgulla", "$120"],
    ["/Images/gulab-jamuns.png", "Peda", "$160"],
    ["/Images/gulab-jamuns.png", "Kaju Katli", "$250"],
    ["/Images/gulab-jamuns.png", "Motichoor Laddo", "$220"],
    ["/Images/gulab-jamuns.png", "Besan Laddo", "$110"],
    ["/Images/gulab-jamuns.png", "Milk Cake", "$170"]
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
          {Sweets.map((data, index) => (
              <ProductCard key={index} imageSrc={data[0]} p={data[2]} n={data[1]} />
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
         {Halwa.map((data, index) => (
              <ProductCard key={index} imageSrc={data[0]} p={data[2]} n={data[1]} />
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
          {SpeSweets.map((data, index) => (
              <ProductCard key={index} imageSrc={data[0]} p={data[2]} n={data[1]} />
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