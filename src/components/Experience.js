import React from 'react';
import Vame from "../assets/img/Vame.jpg"
import Pihla from "../assets/img/pihla.jpg"
import PihlaWorking from "../assets/img/PihlaWorking.jpg"
import PihlaOperation from "../assets/img/PihlaOperation.mp4"
import Pihlaenv from "../assets/img/Pihlaenv.jpg"
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "Pihla Ikkunat",
            logo: Pihla, 
            position: "Robotic Installation Engineer",
            duration: "Jul 2025",
            location: "Ruovesi, Pirkanmaa, Finland · On-site",
            description: "Contract role specializing in robotic system installation and commissioning for industrial production environments.",
            achievements: [
                "Installed and deployed UR20 cobot system with integrated vision system at Pihla Group's Ruovesi factory.",
                "Conducted comprehensive testing, troubleshooting, and optimization to ensure seamless integration with existing factory operations.",
                "Performed on-site adjustments for improved performance and reliability in live production environment.",
                "Delivered training and technical documentation to client team for smooth operation and maintenance.",
                "Ensured full system functionality in production-ready state."
            ],
            technologies: ["TCP/IP Communication", "Machine Vision"],
            media: [PihlaWorking,Pihlaenv,PihlaOperation]
        },
        {
            id: 2,
            company: "Fp-kotaja Oy",
            logo: Vame, 
            position: "Automation Engineer",
            duration: "Apr 2025 - Jul 2025",
            location: "Huittinen, Satakunta, Finland · On-site",
            description: "Internship focused on developing advanced robotic systems for industrial automation with machine vision integration.",
            achievements: [
                "Designed and implemented a machine vision system using VISOR vision sensor software and VISOR XE 2D camera for real-time detection of wooden planks.",
                "Developed algorithms to detect, classify, and locate four plank types with distortion correction for accuracy.",
                "Configured optimized lighting conditions to improve detection reliability and integrated vision system with UR20 collaborative robot using TCP/IP communication.",
                "Updated and optimized cobot program using URScript for precise pick-and-place operations.",
                "Collaborated with engineering team to ensure robust, production-ready solutions."
            ],
            technologies: ["VISOR Vision Sensor", "URScript"],
            media: []
        }
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="experience-bx">
                                        <h2>Work Experience</h2>
                                        <p>Where I have Contributed and Learned</p>
                                        
                                        <div className="timeline-container">
                                            {experiences.map((exp, index) => (
                                                <div key={exp.id} className="timeline-row">
                                                    {/* Experience Card - Always on Left */}
                                                    <div className="experience-card-container">
                                                        <div className="timeline-content">
                                                            <div className="experience-header">
                                                                {exp.logo && (
                                                                    <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                                                                )}
                                                                <div className="company-info">
                                                                    <h3>{exp.position}</h3>
                                                                    <h4>{exp.company} <span className="location"> · {exp.location}</span></h4>
                                                                    <span className="duration">{exp.duration}</span>
                                                                </div>
                                                            </div>

                                                            <div className="experience-text">
                                                                <p className="description">{exp.description}</p>
                                                                
                                                                <div className="achievements">
                                                                    <h5>Key Responsibilities & Achievements:</h5>
                                                                    <ul>
                                                                        {exp.achievements.map((achievement, i) => (
                                                                            <li key={i}>{achievement}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                
                                                                <div className="technologies">
                                                                    <h5>Technologies Used:</h5>
                                                                    <div className="tech-tags">
                                                                        {exp.technologies.map((tech, i) => (
                                                                            <span key={i} className="tech-tag">{tech}</span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="timeline-marker"></div>
                                                    </div>

                                                    {/* Timeline Line */}
                                                    <div className="timeline-line"></div>

                                                    {/* Media Container - Always on Right */}
                                                    <div className="media-container">
                                                        {exp.media && exp.media.map((item, i) => (
                                                            <div key={i} className="media-item-wrapper">
                                                                {item.endsWith(".mp4") ? (
                                                                    <video controls className="exp-media-item">
                                                                        <source src={item} type="video/mp4" />
                                                                        Your browser does not support the video tag.
                                                                    </video>
                                                                ) : (
                                                                    <img src={item} alt="Work sample" className="exp-media-item" />
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};