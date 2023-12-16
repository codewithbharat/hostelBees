import React, { useState, useEffect } from 'react'

import './styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'

import logo from './assets/logo.png'
import { MdAccountCircle } from "react-icons/md";

import { FaLock, FaRegEyeSlash, FaEye } from "react-icons/fa";

import axios from 'axios';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Login = () => {

    const [showPassword, setUsePassword] = useState("password");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login"
    }, []);

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handelInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handelSubmit = (e) => {
        if (isSubmitting) {
            document.getElementById("form").reset();
            alert("Please wait..");

        }

        setIsSubmitting(true);
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_SERVER}/login`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(Response => {
                const userType = Response.data.user;
                console.log(userType);
                // Redirect based on userType
                if (userType === 'Institutes') {
                    navigate("/inst/dashboard");
                }

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
        <>
            <Navbar />
            <div className="login">
                <div className="login__form">
                    <form id='form' onSubmit={handelSubmit}>
                        <h2>Login</h2>
                        <label><span><i><MdAccountCircle size={25} /></i>  Email</span>
                            <input type="text" name="email" onChange={handelInput} id="" placeholder='Enter your email' required />
                        </label>


                        <label><span><i><FaLock size={15} /></i>  Password </span>
                            <input type={showPassword} name='password' onChange={handelInput} placeholder='Password' required />
                            <a href="#" onClick={() => showPassword === "password" ? setUsePassword("text") : setUsePassword("password")} id='unhide_pass'>{showPassword === "password" ? <FaEye /> : <FaRegEyeSlash />}</a>
                        </label>

                        <div className='login_form_forgot'>
                            <a href="#">Forgot Password ?</a>
                        </div>

                        <div className="login__form__buttons">
                            <input type="submit" value="Login" />

                        </div>

                        <div className="login_form_register">
                            <span>
                                Dont't have an account ?
                                <Link className='a' to="/register">Register</Link>
                            </span>
                        </div>

                    </form>
                </div>

                <div className="login__info">
                    <img src={logo} alt="" />
                    <h2>"Welcome back to hostelBees"</h2>
                    <p>Your hub for seamless hostel management. Ready to get started? Please sign in to your account.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login