import React, { useEffect } from 'react'
import './styles/About.css'

import goal from './assets/about_goal.png'


const About = () => {
    useEffect(() => {
        document.title = "About Us"
    }, []);

    const Team = [{
        name: "Bharat Ranjan",
        role: "Founder & Developer",
        img: "./assets/team/bharat.jpg"
    },
    {
        name: "Priyanshu Anand",
        role: "UI/UX Designer",
        img: "./assets/team/pa.jpeg"
    },
    {
        name: "Harsh Vardhan",
        role: "Website Analyst",
        img: "./assets/team/harsh.jpg"
    },

    {
        name: "Md. Aarju Khan",
        role: "Developer",
        img: "./assets/team/aarju.jpg"
    },
    ]

    const Card = (prop) => {
        return (<div>
            <div className="about__team__cards__card">
                <div className="about__team__cards__card-img">
                    <img src={prop.img} alt="" />
                </div>
                <div className="about__team__cards__card-info">
                    <p>{prop.name}</p>
                    <span>{prop.role}</span>
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
                    {Team.map((t) => {
                        return (
                            <Card key={t.name} name={t.name} img={t.img} role={t.role} />
                        )
                    })}
                </div>
            </div>
            <div className="about__goals">
                <svg viewBox="0 0 1440 320"><path fill="#b3d9f6" fill-opacity="1" d="M0,96L26.7,117.3C53.3,139,107,181,160,186.7C213.3,192,267,160,320,149.3C373.3,139,427,149,480,160C533.3,171,587,181,640,181.3C693.3,181,747,171,800,176C853.3,181,907,203,960,202.7C1013.3,203,1067,181,1120,192C1173.3,203,1227,245,1280,256C1333.3,267,1387,245,1413,234.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                <h2>Our Mission</h2>
                <div className="about__goals__content">
                    <div className="about__goals__content-img">
                        <img src={goal} alt="" />
                    </div>
                    <div className="about__goals__content-text">
                        <p>
                            "At HOSTELERS, our mission is to empower educational institutions, hostel wardens, and students with a modern and intuitive hostel management system. We are committed to streamlining hostel operations, enhancing the hostel experience, and simplifying the day-to-day tasks of administrators and residents. We strive to create a dynamic and supportive platform that brings efficiency and convenience to hostel life, making it an enriching and hassle-free experience for everyone we serve."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About