import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import './styles/Register.css'
import logo from './assets/logo.png'
import { MdEmail, MdOutlineAppRegistration } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";

import axios from 'axios';

const Register = () => {
    useEffect(() => {
        document.title = "Get Started"
    }, []);

    const [data, setData] = useState({
        email: "",
        password: "",
        user: ""
    });

    const handelInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handelSubmit = (e) => {
        console.log(data);
        if (isSubmitting) {
            document.getElementById("form").reset();
            alert("Please wait..");

        }

        setIsSubmitting(true);
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_SERVER}/register`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(Response => {
                alert(Response.data.message);
                document.getElementById("form").reset();

            })
            .catch(err => {
                alert(err.response.data.message);
            })
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

                    <label>
                        <span><i><MdEmail size={25} /></i>Email</span>
                        <input type="email" onChange={handelInput} name="email" placeholder='Email Address' required />
                    </label>

                    <label>
                        <span><i><FaUserLock size={25} /></i>Password</span>
                        <input type="password" onChange={handelInput} name="password" placeholder='Strong Password' required />
                    </label>

                    <label>
                        <span><i><MdOutlineAppRegistration size={30} /></i>Register As:</span>
                        <select name='user' onChange={handelInput} required>
                            <option selected disabled>User Role</option>
                            <option value="inst">Institute</option>
                            <option value="warden">Warden</option>
                            <option value="student">Student</option>
                        </select>
                    </label>

                    <div className="register__form__buttons">
                        <input type="submit" value="Register" />
                    </div>
                    <div className="register__form__link">
                        <span>Already have an account ?  </span>
                        <Link className='a' to="/login">Login</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register