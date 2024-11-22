import React from 'react';
import { Link } from 'react-router-dom';

import "./components.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navdiff">
                <div className="navbar-logo">
                    <div className="Nav-Rex">
                        <img src="/Images/Logo.png" alt="Lala Halwa House Logo" className="Navbar-logo"/>
                        {/* <h1>Lala Halwa House</h1> */}
                    </div>
                    <div className="Nav-Uv">
                        <div className="navbar-search">
                            <input type="text" placeholder="Let's Eat" />
                            <button type="submit" className="search-button">
                                <img src="icons/search.svg" alt="" width="15" height="25" />
                            </button>
                            
                        </div>
                        <div className="navbar-account">
                            <Link to="/Accountinfo">
                                <img src="icons/account.svg" alt="" width="25" height="26" />
                            </Link>
                        </div>
                    </div>
                    
                    
                </div>


                <div className="nav-menu">
                    <ul className="navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sweets">Sweets</Link></li>
                        <li><Link to="/halwa">Halwa</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}
export default Navbar;