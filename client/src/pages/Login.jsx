import React from 'react'

import './styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <div className="login__form">
                <form action="">
                    <h2>log in</h2>
                    <label>email/phone no.
                        <input type="text" name="" id="" placeholder='email/phone no.' required />
                    </label>

                    <label>
                        password
                        <input type="password" placeholder='your password' required />
                    </label>
                    <div className="login__form__buttons">
                        <input type="submit" value="login" />
                        <Link className='a' to="/register">join now</Link>
                    </div>
                </form>
            </div>
            <div className="login__info"></div>
        </div>
    )
}

export default Login