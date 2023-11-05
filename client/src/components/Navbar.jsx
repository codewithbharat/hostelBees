import React, { useState } from 'react'
import './style/Navbar.css'

import NavLogo from './assets/Nav_Logo.png'
import { NavLink, Link } from 'react-router-dom'

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

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


                <div className="navbar__hamMenu" onClick={() => setToggle(!toggle)}>
                    <span>
                        {!toggle && <RxHamburgerMenu />}
                    </span>

                    <span>
                        {toggle && <RxCross1 />}
                    </span>
                </div>


                {toggle && <div className="navbar__menu">
                    <NavLink to="/" className="navbar__menu-link">Home</NavLink>
                    <NavLink to="/about" className="navbar__menu-link">About</NavLink>
                    <NavLink to="/contact" className="navbar__menu-link">Contact</NavLink>
                    <NavLink to="/register" className="navbar__menu-register">Join Now</NavLink>

                </div>}
            </div >
        </>
    )
}

export default Navbar
