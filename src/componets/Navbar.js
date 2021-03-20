// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/about" style={{ fontSize: 30 }}>
                Denzale Houston
        </Link>
            <div>
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <Link to="/about" className={location.pathname === "/" || location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            target="_blank " href="https://docs.google.com/document/d/1SJEkHxFDrIaMkoVx7FDfnl4_0G1-c46eExb134P62pM/edit?usp=sharing"
                            className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                        >
                            Resume
                </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;