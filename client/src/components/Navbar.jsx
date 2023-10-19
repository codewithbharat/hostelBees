import React from 'react'
import './style/Navbar.css'

import NavLogo from './assets/Nav_Logo.png'
import NavhamburgerMenu from './assets/Nav_hamburger_menu.png'
import { NavLink, Link } from 'react-router-dom'

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
                    <NavLink to="/" className="navbar__menu-link">Home</NavLink>
                    <NavLink to="/about" className="navbar__menu-link">About</NavLink>
                    <NavLink to="/contact" className="navbar__menu-link">Contact</NavLink>
                    <NavLink to="/services" className="navbar__menu-link">Services</NavLink>

                    <NavLink to="/register" className="navbar__menu-register">Join Now</NavLink>

                </div>
            </div>
        </>
    )
}

export default Navbar
