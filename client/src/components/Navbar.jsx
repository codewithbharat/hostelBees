import React, { useEffect, useState } from 'react'
import './style/Navbar.css'

import NavLogo from './assets/Nav_Logo.png'
import { NavLink, Link } from 'react-router-dom'

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {

    const NavbarLinks = () => {
        const LinksData = [
            { to: '/', text: 'Home', class: 'navbar__menu-link' },
            { to: '/about', text: 'About', class: 'navbar__menu-link' },
            { to: '/contact', text: 'Contact', class: 'navbar__menu-link' },
            { to: '/login', text: 'Sign In', class: 'navbar__menu-register' }
        ]
        return (
            <>
                {
                    LinksData.map((link) => (
                        <NavLink key={link.text} to={link.to} className={link.class}>{link.text}</NavLink>
                    ))
                }
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
                            hostelBees
                        </span>
                    </div>
                </Link>


                <div className="navbar__hamMenu" onClick={() => setToggle(!toggle)}>
                    {!toggle ? <RxHamburgerMenu /> : <RxCross1 />}
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
