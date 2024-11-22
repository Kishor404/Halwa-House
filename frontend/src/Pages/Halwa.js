import React from 'react';
import "../Styles/Halwa.css";
import "../Styles/Styles.css";
import ProductCard from '../components/ProductCard';
const Halwa = () => {
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
    
    return (
        
        <>
            <section>
                <div className='Halwa-topcon'>
                    <div className="Halwa-banner">
                        <img src="gulab-jamuns.png" alt="Delightful Halwa" />
                    </div>
                    <div className='Halwa-text'>
                        <h1>Delightful Halwa</h1>
                    </div>
                </div>
                <div className='Halwa-card'>
                {Halwa.map((data, index) => (
              <ProductCard key={index} imageSrc={data[0]} p={data[2]} n={data[1]} />
            ))}
                </div>
            </section>
        </>
    );
};

export default Halwa;