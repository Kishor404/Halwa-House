import "./components.css";
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <>
        <section>
            <p>Navbar</p>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/Sweets"}>Sweets</Link>
                <Link to={"/Halwa"}>Halwa</Link>
                <Link to={"/About"}>About</Link>
                <Link to={"/Contact"}>Contact</Link>
            </div>
        </section>
        </>
    );
};

export default Navbar;