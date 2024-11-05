import React from 'react';
import profilePic from '../assets/myphoto.png';
import linkedinPic from '../assets/linkedin.png';
import githubPic from '../assets/github.png';
import CVPic from '../assets/Keiichi Taketsuna Resume .pdf';

const Profile = () => {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src={profilePic} alt="John Doe profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Kei Taketsuna</h1>
                <p className="section__text__p2">Spark Blue Developer</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={() => window.open(CVPic)}
                    >
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => document.getElementById('contact').scrollIntoView()}>
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src={linkedinPic}
                        alt="LinkedIn"
                        className="icon"
                        onClick={() => window.location.href='https://www.linkedin.com/in/keitsuna/'}
                    />
                    <img
                        src={githubPic}
                        alt="GitHub"
                        className="icon"
                        onClick={() => window.location.href='https://github.com/keitake123'}
                    />
                </div>
            </div>
        </section>
    );
};

export default Profile;
