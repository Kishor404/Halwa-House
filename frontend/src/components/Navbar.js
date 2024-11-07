import "./components.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navdiff">
                <div className="navbar-logo">
                    <div className="Nav-Rex">
                        <img src="icons\1.png" alt="Lala Halwa House Logo" className="logo" />
                        <h1>Lala Halwa House</h1>
                    </div>
                    <div className="Nav-Uv">
                        <div className="navbar-search">
                            <input type="text" placeholder="Let's Eat" />
                            <button type="submit" className="search-button">
                                
                            </button>
                            <img src="icons/search.svg" alt="" width="15" height="25" />
                        </div>
                        <div className="navbar-account">
                            <img src="icons/account.svg" alt="" width="25" height="26" />
                        </div>
                    </div>
                    
                    
                </div>


                <div className="nav-menu">
                    <ul className="navbar-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sweets">Sweets</a></li>
                        <li><a href="#halwa">Halwa</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}
export default Navbar;