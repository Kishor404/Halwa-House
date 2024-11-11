import React from 'react';
import "../Styles/Halwa.css";
import "../Styles/Styles.css";
import ProductCard from '../components/ProductCard';
const Halwa = () => {
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

export default Halwa;