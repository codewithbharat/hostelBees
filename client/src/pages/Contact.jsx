import React, { useEffect, useState } from 'react'
import './styles/Contact.css'
import axios from 'axios'

import contactImg from './assets/contact_img.png'
import { addListener } from '../../../server/src/model/Institute'

const Contact = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        message: ''

    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handelInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        if (isSubmitting) {
            document.getElementById("form").reset();
            alert("Please wait..");

        }

        setIsSubmitting(true);
        e.preventDefault();
        axios.post(`https://misty-shorts-slug.cyclic.app/contact`, data)
            .then(Response => {
                console.log(Response);
                alert(Response.data.message);

            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsSubmitting(false);
            });
    }
    useEffect(() => {
        document.title = "Contact Us"
    }, []);
    return (
        <div className="contact">
            <div className="contact__img">
                <img src={contactImg} alt="" />
            </div>
            <div className="contact__form">

                <form id='form' onSubmit={handelSubmit}>
                    <h2>Contact Us</h2>
                    <div className="contact_form__labelGroup">
                        <label>First Name
                            <input type="text" onChange={handelInput} name='firstName' id="" placeholder='First Name' required />
                        </label>
                        <label>Last Name
                            <input type="text" onChange={handelInput} name='lastName' id="" placeholder='First Name' required />
                        </label>
                    </div>
                    <div className="contact_form__labelGroup">
                        <label>Email
                            <input type="email" onChange={handelInput} name='email' id="" placeholder='your@email.com' required />
                        </label>
                        <label>Phone No.
                            <input type="number" onChange={handelInput} name='phoneNo' id="" placeholder='9162XXXXXX' required />
                        </label>
                    </div>
                    <label>Message
                        <textarea id="" onChange={handelInput} name='message' cols="30" rows="10" placeholder='Leave us a message...'></textarea>
                    </label>

                    <input className="contact__form__submit" type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    )
}

export default Contact