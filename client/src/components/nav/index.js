import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import icon from "../../assets/images/brand-logo.png";

const Navbar = (props)=>{
return(


    <nav className="navbar navbar-expand-lg sticky-top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <Link to="/">
    <img src={icon} alt="logo-icon" className="logo margin-right"/>
        
    </Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item margin-right">
                <Link to="/search">SEARCH</Link>
            </li>
            <li className="nav-item margin-right">
                <Link to="/saved">SAVED</Link>
            </li>
            
        </ul>

    </div>
</nav>

)
};

export default Navbar;