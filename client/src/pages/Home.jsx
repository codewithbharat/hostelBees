import React from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'

import hero from './assets/home_hero.png'
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
        </div>
    )
}

export default Home