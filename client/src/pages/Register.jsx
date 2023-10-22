import React from 'react'

import { Link } from 'react-router-dom'
import './styles/Register.css'
import logo from './assets/logo.png'

const Register = () => {
    return (
        <div className="register">
            <div className="register__info">
                <img src={logo} alt="" />
                <h2>"Welcome to Hosteler"</h2>
                <p>“Your journey to hassle-free hostel management starts now.
                    Explore and enjoy the convenience of our platform."</p>
            </div>
            <div className="register__form">
                <form action="">
                    <h2>Register Institute</h2>

                    <label>Institute Name
                        <input type="text" name="" id="" placeholder='Your Institute' required />
                    </label>

                    <label>email/phone no.
                        <input type="text" name="" id="" placeholder='email/phone no.' required />
                    </label>

                    <label>
                        password
                        <input type="password" placeholder='your password' required />
                    </label>

                    <label>
                        Confirm password
                        <input type="password" placeholder='Confirm password' required />
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