import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { FaMailBulk, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import './contactform.css'
import Icon from "../Icon/Icon";

const ContactForm = () => {
    const form = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="contact-container wrapper">
            <p className="pre-text">CONTACT</p>
            <h1 className="title">Talk to us.</h1>
            <div className="information-list">
                <div className="information">
                    <Icon size="sm" color="pink" icon={<FaMailBulk size={25} color="var(--background-color)" />} />
                    <a href="https://imtexter.netlify.app/" className="pink-text description">info@imtexter.com</a>
                </div>
                <div className="information">
                    <Icon size="sm" color="pink" icon={<FaInstagram size={25} color="var(--background-color)" />} />
                    <a href="https://imtexter.netlify.app/" className="pink-text description">instagram/imtexter</a>
                </div>
                <div className="information">
                    <Icon size="sm" color="pink" icon={<FaFacebook size={25} color="var(--background-color)" />} />
                    <a href="https://imtexter.netlify.app/" className="pink-text description">facebook/imtexter</a>
                </div>
                <div className="information">
                    <Icon size="sm" color="pink" icon={<FaTwitter size={25} color="var(--background-color)" />} />
                    <a href="https://imtexter.netlify.app/" className="pink-text description">twitter/imtexter</a>
                </div>
            </div>
            <form ref={form} className="cform-container" onSubmit={sendEmail}>
                <div className="form-field">
                    <label>Full Name:</label>
                    <input type="text" name="name" placeholder="Full Name"/>
                </div>
                <div className="form-field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-field">
                    <label>Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"/>
                </div>
                <button value="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;