import React, { useState, useEffect } from 'react'

import './styles/Login.css'
import { Link } from 'react-router-dom'

import logo from './assets/logo.png'

const Login = () => {

    const [showPassword, setUsePassword] = useState("password");

    useEffect(() => {
        document.title = "Login | Institute"
    }, []);
    return (
        <div className="login">
            <div className="login__form">
                <form action="">
                    <h2>Institute Login</h2>
                    <label>email/phone no.
                        <input type="text" name="" id="" placeholder='email/phone no.' required />
                    </label>

                    <label>
                        password
                        <input type={showPassword} placeholder='your password' required />
                        <a href="#" onClick={() => showPassword === "password" ? setUsePassword("text") : setUsePassword("password")}>show Password</a>
                    </label>
                    <div className="login__form__buttons">
                        <input type="submit" value="login" />
                        <Link className='a' to="/register">join now</Link>
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