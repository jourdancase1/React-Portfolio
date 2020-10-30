import React from "react"
import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
    return (
        <nav className="nav">
            <h3>JC</h3>
            <ul className="nav-links">
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/projects">
                    <li>Projects</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;