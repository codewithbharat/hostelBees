import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import './styles/Register.css'
import logo from './assets/logo.png'

import axios from 'axios';

const Register = () => {
    useEffect(() => {
        document.title = "Get Started"
    }, []);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        userType: "",
    });

    const handelInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userType, setUserType] = useState("inst");

    const handelSubmit = (e) => {
        if (isSubmitting) {
            document.getElementById("form").reset();
            alert("Please wait..");

        }

        setIsSubmitting(true);
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_SERVER}/${userType}`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(Response => {
                console.log(Response);
                alert(Response.data.message);
                document.getElementById("form").reset();

            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return (
        <div className="register">
            <div className="register__info">
                <img src={logo} alt="" />
                <h2>"Welcome to hostelBees"</h2>
                <p>“Your journey to hassle-free hostel management starts now.
                    Explore and enjoy the convenience of our platform."</p>
            </div>
            <div className="register__form">
                <form id='form' onSubmit={handelSubmit}>
                    <h2>Get Registered</h2>

                    <label>Name
                        <input type="text" onChange={handelInput} name="name" placeholder='Your Institute' required />
                    </label>

                    <label>email
                        <input type="email" onChange={handelInput} name="email" placeholder='email/phone no.' required />
                    </label>

                    <label>
                        password
                        <input type="password" onChange={handelInput} name="password" placeholder='your password' required />
                    </label>

                    <label>
                        Register As
                        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="inst">Institute</option>
                            <option value="warden">Warden</option>
                            <option value="student">Student</option>
                        </select>
                    </label>
                    <div className="register__form__buttons">
                        <input type="submit" value="register" />
                        <Link className='a' to="/login">login</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register