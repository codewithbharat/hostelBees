import React from 'react'
import './style/Navbar.css'

import NavLogo from './assets/Nav_Logo.png'
import NavhamburgerMenu from './assets/Nav_hamburger_menu.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link to="/" className='navbar__GroupBrand'>
                    <div className="navbar__brand">
                        <img src={NavLogo} alt="" className="navbar__brand-logo" />
                        <span className="navbar__brand-name">
                            Bedster's
                        </span>
                    </div>
                </Link>

                <div className="navbar__menu">
                    <Link to="/" className="navbar__menu-link">Home</Link>
                    <Link to="/about" className="navbar__menu-link">About</Link>
                    <Link to="/contact" className="navbar__menu-link">Contact</Link>
                    <Link to="/services" className="navbar__menu-link">Services</Link>

                    <Link to="/register" className="navbar__menu-register">Join Now</Link>

                </div>
            </div>
        </>
    )
}

export default Navbar
