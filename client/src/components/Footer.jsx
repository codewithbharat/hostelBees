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
                        <li><Link className='a'>Documentation</Link></li>
                        <li><Link className='a'>Support</Link></li>
                        <li><Link className='a'>Career</Link></li>
                    </div>
                    <div className="footer__links-group">
                        <span>
                            Company
                        </span>
                        <li><Link className='a'>About</Link></li>
                        <li><Link className='a'>News Letter</Link></li>
                        <li><Link className='a'>Documentation</Link></li>
                        <li><Link className='a'>Support</Link></li>
                        <li><Link className='a'>Career</Link></li>
                    </div>
                    <div className="footer__links-group">
                        <span>
                            Company
                        </span>
                        <li><Link className='a'>About</Link></li>
                        <li><Link className='a'>News Letter</Link></li>
                        <li><Link className='a'>Documentation</Link></li>
                        <li><Link className='a'>Support</Link></li>
                        <li><Link className='a'>Career</Link></li>
                    </div>

                    <div className="footer__links-group">
                        <span>
                            Company
                        </span>
                        <li><Link className='a'>About</Link></li>
                        <li><Link className='a'>News Letter</Link></li>
                        <li><Link className='a'>Documentation</Link></li>
                        <li><Link className='a'>Support</Link></li>
                        <li><Link className='a'>Career</Link></li>
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