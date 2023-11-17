import React from 'react'
import './style/Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__links">
                    <div className="footer__links-group">
                         <span>
                            HOSTELBEES
                        </span>
                        <p>We are specialized in designings & make your HMS as a professional,</p>
                        <p>Try our premium services.</p>
                            <div className='footer__links-group__social'>
                        <li><Link className='a'><FaLinkedin size={30} color='white'/></Link></li>
                        <li><Link className='a'><FaTwitterSquare size={30} color='white'/></Link></li>
                        <li><Link className='a'><FaFacebookSquare size={30} color='white'/></Link></li>
                        <li><Link className='a'><FaInstagramSquare size={30} color='white'/></Link></li>
                            </div>
                    </div>
                    {/* <div className="footer__links-group">
                        <span>
                            Company
                        </span>
                        <li><Link className='a'>About</Link></li>
                        <li><Link className='a'>News Letter</Link></li>
                        <li><Link className='a'>Tutorials</Link></li>
                        <li><Link className='a'>Support</Link></li>
                        <li><Link className='a'>Career</Link></li>
                        <li><Link className='a'>Help Center</Link></li>
                    </div> */}
                    <div className="footer__links-group">
                        <span>
                            Quick Links
                        </span>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>ﾠﾠHome</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>ﾠﾠServices</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>ﾠﾠWhy HMS</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>ﾠﾠHostels</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>ﾠﾠDocumentation</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>ﾠﾠReviews</Link></li>
                    </div>

                    <div className="footer__links-group">
                        <span>
                            Contact
                        </span>
                        <li><Link className='a'>ﾠﾠﾠﾠ</Link></li>
                        <li><Link className='a'><IoIosMail size={20} color='white'/>ﾠﾠaarju123@gmail.com</Link></li>
                        <li><Link className='a'><LuPhoneCall size={20} color='white'/>ﾠﾠ+91 0000000000</Link></li>
                        <li><Link className='a'>ﾠﾠﾠﾠ</Link></li>
                        <li><Link className='a'><FaMapLocationDot size={20} color='white'/>ﾠﾠSPNREC,Araria,Bihar</Link></li>
                        <li><Link className='a'>ﾠﾠﾠﾠIndia,854318</Link></li>
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