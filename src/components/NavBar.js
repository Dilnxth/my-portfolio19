import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo3 from '../assets/img/logo3.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // Define offsets for each section
    const sectionOffsets = {
        home: 0,
        experience: -120,
        education: -150,
        skills: -250,
        projects: -120,
        connect: -140
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onNavigate = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const navbarHeight = document.querySelector(".navbar").offsetHeight;
            const yOffset = sectionOffsets[id] || -navbarHeight;
            const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: yPosition, behavior: "smooth" });
            setActiveLink(id);
        }
    };

    const handleToggle = () => {
        const navbarToggler = document.querySelector('.navbar-collapse');
        if (navbarToggler.classList.contains('show')) {
            navbarToggler.classList.remove('show');
        }
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo3}
                        alt="Logo3"
                        className="navbar-logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                onNavigate('home');
                                handleToggle();
                            }}
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                onNavigate('experience');
                                handleToggle();
                            }}
                            className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                        >
                            Work Experience
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                onNavigate('education');
                                handleToggle();
                            }}
                            className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
                        >
                            Education
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                onNavigate('skills');
                                handleToggle();
                            }}
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                onNavigate('projects');
                                handleToggle();
                            }}
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/dilneth-nanayakkara-19a8b1292?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA5X4%2Fb7gR%2BCz9KmOjXAsvA%3D%3D" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com/_d_i_l_n_e_t_h_x_/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt="Instagram" />
                            </a>
                        </div>
                        <button className="vvd" onClick={() => onNavigate('connect')}><span>Get in Touch</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};