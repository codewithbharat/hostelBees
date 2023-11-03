import React from 'react'
import './styles/About.css'

import teamImg from "./assets/team/demo.png";
const About = () => {

    const Card = (prop) => {
        return (<div>
            <div className="about__team__cards__card">
                <div className="about__team__cards__card-img">
                    <img src={teamImg} alt="" />
                </div>
                <div className="about__team__cards__card-info">
                    <p>Bharat Ranjan</p>
                    <span>Developer</span>
                </div>
            </div>
        </div>)
    }
    return (
        <div className="about">
            <div className="about__info">
                <div className="about__info__content">
                    <div className="about__info__content__text">
                        <h2>About Us</h2>
                        <p>"Welcome to Hosteler, your trusted partner in modern hostel management. Our mission is to simplify and enhance the hostel experience for educational institutions and students alike. We provide an innovative platform that streamlines room allocation, fee management, and communication, making hostel life easier and more convenient. Learn more about our journey and how we're shaping the future of hostel management."</p>
                    </div>

                    <div className="about__info__content__img">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem nihil corrupti cum ipsum ipsa sequi ratione consequuntur, ea ullam tempore facilis eius vitae molestiae in itaque voluptates iusto dignissimos assumenda suscipit earum ex? Illo, cum fugit reprehenderit nobis eligendi ipsum aliquam saepe amet perspiciatis ab non fugiat. Corporis, optio? Architecto porro accusamus ducimus. Non expedita illum corporis, nostrum minima ab doloremque molestiae? Sit, nemo? Nihil optio commodi libero porro? Quia, velit ea. Totam, natus dolores! Delectus natus nihil eaque quas reprehenderit, ipsa ad necessitatibus quasi iusto laudantium similique consequatur culpa aliquam rem incidunt unde. Blanditiis ad assumenda hic animi.</p>
                    </div>
                </div>
                <svg viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,320L30,266.7C60,213,120,107,180,69.3C240,32,300,64,360,101.3C420,139,480,181,540,170.7C600,160,660,96,720,96C780,96,840,160,900,197.3C960,235,1020,245,1080,213.3C1140,181,1200,107,1260,85.3C1320,64,1380,96,1410,112L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
            </div>
            <div className="about__team">
                <h2>Behind the Scenes: Get to Know Our Team</h2>
                <div className="about__team__cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

        </div>
    )
}

export default About