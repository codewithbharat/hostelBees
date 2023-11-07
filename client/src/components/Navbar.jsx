import React, { useEffect, useState } from 'react'
import './style/Navbar.css'

import NavLogo from './assets/Nav_Logo.png'
import { NavLink, Link } from 'react-router-dom'
import { useMediaQuery } from 'react'

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {

    const NavbarLinks = () => {
        return (
            <>
                <NavLink to="/" className="navbar__menu-link">Home</NavLink>
                <NavLink to="/about" className="navbar__menu-link">About</NavLink>
                <NavLink to="/contact" className="navbar__menu-link">Contact</NavLink>
                <NavLink to="/login" className="navbar__menu-register">Sign In</NavLink>
            </>
        )
    }

    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        if (width > 480) {
            setToggle(true);
        }
    }, []);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="navbar">
                <Link to="/" className='navbar__GroupBrand' onClick={() => scrollTop()}>
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

                {!toggle && <div id="nav__web" className="navbar__menu" onClick={() => { scrollTop(); setToggle(!toggle); }}>
                    <NavbarLinks />
                </div>}

                {toggle && <div className="navbar__menu" onClick={() => { scrollTop(); setToggle(!toggle); }}>
                    <NavbarLinks />
                </div>}
            </div >
        </>
    )
}

export default Navbar
