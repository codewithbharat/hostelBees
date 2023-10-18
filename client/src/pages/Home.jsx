import React from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'

import hero from './assets/home_hero.png'
import info from './assets/home_info.png'
import tut from './assets/home_tut.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className="hero">
                <div className="hero_textBox">
                    <div className="hero__text">
                        <h1>All-in-one Hostel Managment System for institutes</h1>
                        <p>"Hosteler" is an all-in-one hostel management solution designed to streamline and simplify the management of hostel facilities within educational institutes.</p>
                        <div className="hero__text__buttons">
                            <Link className='a'>Know more about us</Link>
                            <Link className='button'>Get Started</Link>
                        </div>
                    </div>
                </div>

                <div className="hero__img">
                    <img src={hero} alt="" />
                </div>
            </div>
            <div className="info">
                <div className="info__textbox">
                    <div className="info__textbox__text">
                        <span>hostel managment system</span>
                        <h2>"Seamless Hostel Managment, Elevated Online"</h2>
                        <p>"Hosteler" is an all-in-one hostel management solution designed to streamline and simplify the management of hostel facilities within educational institutes. With a custom page dedicated to each institute, Hosteler empowers institutions to effortlessly oversee and optimize hostel operations, catering to the specific needs of students and staff alike.</p>
                    </div>
                </div>
                <div className="info__img">
                    <img src={info} alt="" />
                </div>
            </div>
            <div className="tut">
                <div className="tut__textbox">
                    <div className="tut__textbox__text">
                        <p>
                            Our 'One Solution for Everyone' philosophy means that whether you're an institute administrator looking to simplify administrative tasks, a student eager to make hostel life a breeze, a warden responsible for student well-being, or a support staff member striving for operational excellence, Hosteler is here to streamline and elevate your experience. We believe in providing a unified, user-friendly platform that brings everyone together to create a well-managed, comfortable, and secure hostel environment.
                        </p>
                    </div>
                </div>
                <div className="tut__video">
                    <img src={tut} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home