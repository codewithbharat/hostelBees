import React, { useState, useEffect } from 'react'

import './styles/Login.css'
import { Link } from 'react-router-dom'

import logo from './assets/logo.png'
import { MdAccountCircle } from "react-icons/md";
import { FaPersonShelter, FaBuildingFlag } from "react-icons/fa6";
import { FaLock, FaRegEyeSlash } from "react-icons/fa";

// const [userType, setUserType] = useState("inst");
const Login = () => {

    const [showPassword, setUsePassword] = useState("password");

    useEffect(() => {
        document.title = "Login | Institute"
    }, []);
    return (
        <div className="login">
            <div className="login__form">
                <form action="">
                    <h2>Login</h2>
                    <label><span><i><MdAccountCircle size={25} /></i>  Email</span>
                        <input type="text" name="" id="" placeholder='Enter your email' required />
                    </label>


                    <label><span><i><FaLock size={15} /></i>  Password </span>
                        <input type={showPassword} placeholder='Password' required />
                        <a href="#" className='unhide_pass'><FaRegEyeSlash onClick={() => showPassword === "password" ? setUsePassword("text") : setUsePassword("password")} /></a>
                    </label>
                    <div className='login__form_select'>
                        <label><span><i><FaPersonShelter /></i>  Login as : </span>
                            <select name="Register As" id="login_form_select" required>
                                <option selected>Please Select User Role</option>
                                <option value="inst">Institute</option>
                                <option value="warden">Warden</option>
                                <option value="student">Student</option>
                            </select>
                        </label>
                    </div>
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
    )
}

export default Login