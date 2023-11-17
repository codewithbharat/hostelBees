import React from 'react'
import './style/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__links">
                    <div className="footer__links-group">
                        <span>
                            Company
                        </span>
                        <li><Link className='a'>About</Link></li>
                        <li><Link className='a'>News Letter</Link></li>
                        <li><Link className='a'>Tutorials</Link></li>
                        <li><Link className='a'>Support</Link></li>
                        <li><Link className='a'>Career</Link></li>
                        <li><Link className='a'>Help Center</Link></li>
                    </div>
                    <div className="footer__links-group">
                        <span>
                            Quick Links
                        </span>
                        <li><Link className='a'>Home</Link></li>
                        <li><Link className='a'>services</Link></li>
                        <li><Link className='a'>Why HMS</Link></li>
                        <li><Link className='a'>Hostels</Link></li>
                        <li><Link className='a'>Documentation</Link></li>
                        <li><Link className='a'>Reviews</Link></li>
                    </div>
                    <div className="footer__links-group">
                        <span>
                            Social Media
                        </span>
                        <li><Link className='a'>LinkedIn</Link></li>
                        <li><Link className='a'>Twitter</Link></li>
                        <li><Link className='a'>Facebook</Link></li>
                        <li><Link className='a'>Instagram</Link></li>
                        <li><Link className='a'>Youtube</Link></li>
                        <li><Link className='a'>Blog</Link></li>
                    </div>

                    <div className="footer__links-group">
                        <span>
                            Contact
                        </span>
                        <li><Link className='a'>us@hms.com</Link></li>
                        <li><Link className='a'>+91 0000000000</Link></li>
                        <li><Link className='a'>ﾠﾠﾠﾠ</Link></li>
                        <li><Link className='a'>SPNREC</Link></li>
                        <li><Link className='a'>Araria,Bihar</Link></li>
                        <li><Link className='a'>India,854318</Link></li>
                    </div>
                </div>
                <div className="footer__margin"></div>
                <div className="footer__copyright">
                    <span> &copy; Copyright 2023 | All right reserved</span>
                    <Link className='a'>Privacy Policy</Link>
                    <Link className='a'>Terms & Conditions</Link>
                </div>
                <div className="footer__margin"></div>
            </div>
        </>
    )
}

export default Footer