import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import universitylogo2 from "../assets/img/universitylogo2.jpg";
import schoollogo2 from "../assets/img/schoollogo2.png";

export const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Mechatronics Engineering",
      institution: "Satakunta University of Applied Sciences, Finland",
      year: "2023 - 2027",
      description: "Specialized in robotics, automation and advanced engineering design.",
      logo: universitylogo2, // Add the university logo
    },
    {
      degree: "High School",
      institution: "Kingswood College, Sri Lanka",
      year: "2008 - 2022",
      description: "Majored in Combined Mathematics, Physics and Chemistry.",
      logo: schoollogo2, // Add the school logo
    },
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Education</h2>
                  <p>
                    Here's a glimpse of my academic journey that laid the foundation for my technical expertise.
                  </p>
                  <Row>
                    {educationData.map((edu, index) => (
                      <Col key={index} sm={12} md={6} className="edu-card-container">
                        <div className={`edu-card animate__animated animate__zoomIn`}>
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="edu-logo"
                          />
                          <h4>{edu.degree}</h4>
                          <h5>{edu.institution}</h5>
                          <span>{edu.year}</span>
                          <p>{edu.description}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
