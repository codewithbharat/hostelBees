import React from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'

import hero from './assets/home_hero.png'
import info from './assets/home_info.png'
import tut from './assets/home_tut.jpg'

const RatingCard = (props) => {
    return (
        <div className="ratingCard">
            <h3>{props.name}</h3>
            <p>{props.des}</p>
            <span>{props.inst}</span>
        </div>
    )
}

const Home = () => {

    const ratings = [{
        name: "Bharat Ranjan",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores consequatur repellat et, tempore dolore sed nesciunt distinctio autem eaque magni.",
        inst: "spnrec"
    }, {
        name: "Md. Aarju Khan",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores consequatur repellat et, tempore dolore sed nesciunt distinctio autem eaque magni.",
        inst: "spnrec"
    },
    {
        name: "Priyanshu Anaand",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores consequatur repellat et, tempore dolore sed nesciunt distinctio autem eaque magni.",
        inst: "spnrec"
    },
    ];



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
            <div className="userExp">
                <div className="userExp__heading">
                    <h2>Our User's Experiences</h2>
                </div>
                <div className="userExp__cards">
                    <RatingCard
                        name="Bharat Ranjan"
                        des="'Incorporating Hosteler into our hostel management system has been a game-changer for our institution. This platform offers a tailored solution that simplifies room allocation, fee management, and staff oversight. The custom institute page streamlines all administrative tasks, making hostel management efficient and hassle-free. Hosteler has truly elevated our operations.'"
                        inst="SPNREC, Araria" />
                    <RatingCard
                        name="Md. Aarju Khan"
                        des="'Hosteler has revolutionized our approach to hostel management. With its dedicated institute page, we have complete control over every aspect of our hostel facilities. The system is intuitive, and the communication hub enhances interaction between our staff, students, and administrators. We highly recommend Hosteler to other educational institutes seeking a comprehensive and user-friendly solution.'"
                        inst="spnrec , araria"
                    />
                    <RatingCard
                        name="Priyanshu Anand"
                        des="'Hosteler has revolutionized our approach to hostel management. With its dedicated institute page, we have complete control over every aspect of our hostel facilities. The system is intuitive, and the communication hub enhances interaction between our staff, students, and administrators. We highly recommend Hosteler to other educational institutes seeking a comprehensive and user-friendly solution.'"
                        inst="spnrec , araria"
                    />

                </div>
            </div>
        </div>
    )
}

export default Home

