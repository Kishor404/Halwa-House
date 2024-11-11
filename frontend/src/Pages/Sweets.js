import React from 'react';
import "../Styles/Sweets.css";
import "../Styles/Styles.css";
import ProductCard from '../components/ProductCard';
const Sweets = () => {
    return (
        <>
            <section>
                <div className='sweets-topcon'>
                    <div className="sweets-banner">
                        <img src="gulab-jamuns.png" alt="Delightful Sweets" />
                    </div>
                    <div className='sweets-text'>
                        <h1>Delightful Sweets</h1>
                    </div>
                </div>
                <div className='sweets-card'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </section>
        </>
    );
};

export default Sweets;