import { Container, Row, Col } from "react-bootstrap";
import logo3 from "../assets/img/logo3.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={12} md={4} className="footer-logo-section">
            <img src={logo3} alt="Logo" className="footer-logo" />
          </Col>

          {/* Social Icons Section */}
          <Col xs={12} md={4} className="text-center">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/dilneth-nanayakkara-19a8b1292?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA5X4%2Fb7gR%2BCz9KmOjXAsvA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/_d_i_l_n_e_t_h_x_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>

          {/* Contact Info Section */}
          <Col xs={12} md={4} className="footer-contact">
            <p>
              Email:{" "}
              <a href="mailto:nanayakkaradilnethfi@gmail.com">
                nanayakkaradilnethfi@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+358442494652">+358 442494652</a>
            </p>
          </Col>
        </Row>
        {/* Copyright Section */}
        <Row>
          <Col xs={12}>
            <p className="footer-copyright">© 2025. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
