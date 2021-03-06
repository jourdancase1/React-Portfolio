import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <nav className="navbar" fixed="top">
           <div className="navbar-container">
               <Link to="/" className="navbar-logo nav-links">
                JC
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}/>
               </div>
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                   <li className="nav-item">
                       <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>Portfolio</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                   </li>
               </ul>
           </div>
       </nav>
        </>
    )
}

export default Nav;