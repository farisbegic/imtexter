import React, {useEffect, useState} from 'react';
import './footer.css'
import Icon from "../Icon/Icon";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import {Link} from "react-router-dom";
import axios from "axios";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async () => {
        if (!email) {
            setError("Please enter your email address")
            return;
        }

        try {
            const payload = {
                email: email,
                status: "subscribed"
            }
            const { data } = axios.post(`https://${process.env.REACT_APP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.REACT_APP_AUDIENCE_ID}/members`,
                payload,
                {
                headers: {
                    Authorization: `Basic ${process.env.REACT_APP_MAILCHIMP_API_KEY}`
        }
            })
            console.log(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }, [error])
    return (
        <div className="footer-container">
            <div className="footer wrapper">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src="./logo-white.png" alt="logo"/>
                    </div>
                    <div className="social-media">
                        <Icon size="sm" icon={<FaFacebookF color="var(--main-color)" size={18}/>}/>
                        <Icon size="sm" icon={<FaInstagram color="var(--main-color)" size={18}/>}/>
                        <Icon size="sm" icon={<FaTwitter color="var(--main-color)" size={18}/>}/>
                        <Icon size="sm" icon={<FaYoutube color="var(--main-color)" size={18}/>}/>
                    </div>
                    <p className="white-text description">Copyright &copy; { new Date().getFullYear() } ImTexter. All rights reserved</p>
                </div>
                <div className="footer-middle">
                    <p className="white-text subtitle">MENU</p>
                    <Link to="/" className="white-text nav-links">Home</Link>
                    <Link to="/" className="white-text nav-links">Features</Link>
                    <Link to="/" className="white-text nav-links">About</Link>
                </div>
                <div className="newsletter">
                    <p className="white-text description">Subscribe to our newsletter!</p>
                    <div className="newsletter-box">
                        <input className="newsletter-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address.."/>
                        <button className="newsletter-button" onClick={onSubmit}><AiOutlineSend size={17} color="var(--main-color)"/></button>
                    </div>
                    { error && (
                        <p className="white-text pre-text">Please enter your email.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Footer;