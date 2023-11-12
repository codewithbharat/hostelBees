import React, { useEffect } from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'

import hero from './assets/home_hero.png'
import info from './assets/home_info.png'
import tut from './assets/home_tut.jpg'


const UserExperiences = [
    {
        name: "Emma Thompson",
        description: "HostelBees transformed our hostel experience! The automated tasks saved time, and the secure database gave us peace of mind. Seamless communication made hostel life a breeze."
    },
    {
        name: "Alex Rodriguez",
        description: "Using HostelBees was a game-changer. The user-friendly interfaces made navigation a breeze, and the swift onboarding process got us up and running in no time. Highly recommended!"
    },
    {
        name: "Jasmine Chen",
        description: "HostelBees created a sense of community. The seamless communication hub brought us together, and the digital transformation made hostel living more enjoyable. Loving the innovation!"
    },
    {
        name: "Ryan Johnson",
        description: "As a hostel administrator, HostelBees made my job easier. The automated task management and secure cloud infrastructure streamlined operations. A must-have for efficient hostel management."
    }
];


const RatingCard = (props) => {
    return (
        <div className="ratingCard">
            <h3>{props.name}</h3>
            <p>"{props.des}"</p>
        </div>
    )
}

const Services = [
    {
        name: "Automated Task Management",
        des: "Effortlessly handle routine tasks such as room allocations and fee collections, reducing manual workload."
    },
    {
        name: "Cloud-Based Security",
        des: "Benefit from a secure cloud infrastructure, ensuring data safety and accessibility for institutes, wardens, and students."
    },
    {
        name: "Seamless Communication Hub",
        des: "HostelBees acts as a centralized platform, connecting institutes, wardens, and students for efficient and transparent communication."
    },
    {
        name: "Digital Transformation",
        des: "Experience the ease of transitioning from traditional manual processes to a digital solution, enhancing accessibility and efficiency."
    },
    {
        name: "User-Friendly Interfaces",
        des: "Intuitive designs cater to both administrators and students, providing a smooth and enjoyable user experience."
    },
    {
        name: "Swift Onboarding Process",
        des: "Initiate the hostel management journey seamlessly with a quick and user-friendly onboarding process."
    }
];

const ServiceCard = (props) => {
    return (
        <div className="serviceCard">
            <h3>{props.name}</h3>
            <p>{props.des}</p>
        </div>
    )
}

const Home = () => {
    useEffect(() => {
        document.title = "hostelBees | ArunaByte Innovations"
    }, []);
    return (

        <div className='home'>
            <div className="hero">
                <div className="hero_textBox">
                    <div className="hero__text">
                        <h1>"Unlock the Hive of Convenience with HostelBees."</h1>
                        <p>"HostelBees: Automated hostel management, a secure cloud-based database, and seamless communication." Help us shape the future of hostel living!"</p>
                        <div className="hero__text__buttons">
                            <Link to="/about" className='a'>Know more about us</Link>
                            <Link to="/register" className='button'>Get Started</Link>
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
                        <h2>"Effortless Solutions for Hostel Living"</h2>
                        <p>HostelBees is a pioneer in hostel management innovation, ensuring data confidentiality through strong cloud-based security. Our digital transformation streamlines operations while providing a simple user experience. We serve as a primary communication point for institutes, wardens, and students. With user-friendly interfaces and quick onboarding, HostelBees pioneers hostel administration revolution. Join us as we shape the future of hostel comfort and connectivity!</p>
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
                            "HostelBees prioritises user experience by providing managers and students with simple interfaces that allow for easy navigation. Our quick onboarding procedure makes the switch to HostelBees simple, ushering users into the future of efficient hostel management."
                        </p>
                    </div>
                </div>
                <div className="tut__video">
                    <img src={tut} alt="" />
                </div>
            </div>
            <div className="services">
                <h2>Explore the Core Features</h2>
                <div className="services__cards">
                    {
                        Services.map((service) => (
                            <ServiceCard name={service.name} des={service.des} />
                        ))
                    }
                </div>
            </div>

            <div className="reqCall">
                <h1>Request Call Back</h1>
                <form>
                    <input className="input" placeholder='YOUR NAME' type="text" name="name" />
                    <input className="input" placeholder='YOUR EMAIL' type="text" name="name" />
                    <input className="input" placeholder='YOUR PHONE NO.' type="text" name="name" />
                    <input className="callback" type="submit" value="CALL BACK" />
                </form>
            </div>

            <div className="userExp">
                <div className="userExp__heading">
                    <h2>Our User's Experiences</h2>
                </div>
                <div className="userExp__cards">
                    {
                        UserExperiences.map((user) => (
                            <RatingCard name={user.name} des={user.description} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home

