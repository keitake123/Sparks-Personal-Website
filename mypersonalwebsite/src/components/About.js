import React, { useState, useEffect } from 'react';
import myPhoto from '../assets/photo2.jpg';

const About = () => {
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchExperience = async () => {
            const data = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { id: 1, role: "Software Engineer Intern" },
                        { id: 2, role: "LSTM Modelling Research Assistant"},
                        { id: 3, role: "Data Science Intern" },
                    ]);
                }, 1000);
            });
            setExperience(data);
        };

        const fetchEducation = async () => {
            const data = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { id: 1, degree: "University of Pennsylvania" },
                        { id: 2, degree: "Bachelors Degree in Computer Science" },
                    ]);
                }, 1000);
            });
            setEducation(data);
        };

        fetchExperience();
        fetchEducation();
    }, []);

    return (
        <section id="about" className="about">
            <h2>Get To Know More</h2>
            <h3>About Me</h3>
            <div className="about-content">
                <img src={myPhoto} alt="Kei Taketsuna" className="about-photo" />
                <div className="about-details">
                    <div className="experience">
                        <h4>Experience</h4>
                        {experience.map(item => (
                            <div key={item.id} className={`experience-item-${item.id}`}>
                                <p>{item.role}</p>
                            </div>
                        ))}
                    </div>
                    <div className="education">
                        <h4>Education</h4>
                        {education.map(item => (
                            <p key={item.id} className={`education-item-${item.id}`}>
                                {item.degree}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-container">
                <p>
                Hey there! I'm Kei, a first year student at the University of Pennsylvania pursuing  Bachelor's of Science in Computer Science from Tokyo, Japan. I am intrested in 
                Artificial Intelligence, software development, and computational biology, and am a cofounder of Fusion Audio, an Audiobook platform. In my free time 
                I love to play soccer, go skiing, and travel around the world. Feel free to reach out!
                </p>
            </div>
        </section>
    );
};

export default About;
