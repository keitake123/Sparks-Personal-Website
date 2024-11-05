import React from 'react';
import emailpic from '../assets/email.png';
import linkedinpic from '../assets/linkedin.png';

const Contact = () => {
    return (
        <section id="contact">
            <p>Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info">
                <div className="contact-item">
                    <img src={emailpic} alt="Email Icon" className="icon" />
                        keitsuna@sas.upenn.edu
                </div>
                <div className="contact-item">
                    <img
                        src={linkedinpic}
                        alt="LinkedIn"
                        className="icon"
                        onClick={() => window.location.href='https://www.linkedin.com/in/keitsuna/'}
                    />
                    linkedin
                </div>
            </div>
        </section>
    );
};

export default Contact;
