import React from 'react';
import "../Styles/Sweets.css";
import "../Styles/Styles.css";
import ProductCard from '../components/ProductCard';
const Sweets = () => {
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
    return (
        <>
            <section>
                <div className='sweets-topcon'>
                    <div className="sweets-banner">
                        <img src="Images/gulab-jamuns.png" alt="Delightful Sweets" />
                    </div>
                    <div className='sweets-text'>
                        <h1>Delightful Sweets</h1>
                    </div>
                </div>
                <div className='sweets-card'>
                {Sweets.map((data, index) => (
              <ProductCard key={index} imageSrc={data[0]} p={data[2]} n={data[1]} />
            ))}
                </div>
            </section>
        </>
    );
};

export default Sweets;