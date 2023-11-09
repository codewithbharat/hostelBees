import React, { useEffect } from 'react'
import './styles/Contact.css'

import contactImg from './assets/contact_img.png'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us"
    }, []);
    return (
        <div className="contact">
            <div className="contact__img">
                <img src={contactImg} alt="" />
            </div>
            <div className="contact__form">

                <form>
                    <h2>Contact Us</h2>
                    <div className="contact_form__labelGroup">
                        <label>First Name
                            <input type="text" name="" id="" placeholder='First Name' required />
                        </label>
                        <label>Last Name
                            <input type="text" name="" id="" placeholder='First Name' required />
                        </label>
                    </div>
                    <div className="contact_form__labelGroup">
                        <label>Email
                            <input type="text" name="" id="" placeholder='your@email.com' required />
                        </label>
                        <label>Phone No.
                            <input type="text" name="" id="" placeholder='9162XXXXXX' required />
                        </label>
                    </div>
                    <label>Message
                        <textarea name="Message" id="" cols="30" rows="10" placeholder='Leave us a message...'></textarea>
                    </label>

                    <input className="contact__form__submit" type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    )
}

export default Contact