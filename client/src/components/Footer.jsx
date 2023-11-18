import React from 'react'
import './style/Footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
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
                        <p>Try our premium services now.</p>
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
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>&nbsp;Home</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>&nbsp;Services</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>&nbsp;Why HMS</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>&nbsp;Hostels</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>&nbsp;Documentation</Link></li>
                        <li><Link className='a'><HiArrowSmRight size={20} color='white'/>&nbsp;Reviews</Link></li>
                    </div>

                    <div className="footer__links-group">
                        <span>
                            Contact
                        </span>
                        <li><Link className='a'>&nbsp;</Link></li>
                        <li><Link className='a'><IoIosMail size={20} color='white'/>&nbsp;&nbsp;aarju123@gmail.com</Link></li>
                        <li><Link className='a'><LuPhoneCall size={20} color='white'/>&nbsp;&nbsp;+91 0000000000</Link></li>
                        <li><Link className='a'>&nbsp;</Link></li>
                        <li><Link className='a'><FaMapLocationDot size={20} color='white'/>&nbsp;&nbsp;SPNREC,Araria,Bihar</Link></li>
                        <li><Link className='a'>&nbsp;&nbsp;&nbsp;&nbsp;India,854318</Link></li>
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