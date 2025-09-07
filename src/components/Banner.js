import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import robot5 from "../assets/img/robot5.gif";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Mechatronics Engineer", "Robotics Engineer", "Mechanical Engineer", "Automation Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    } else {
      setDelta(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleContactClick = () => {
    const footerSection = document.getElementById("footer");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to My Portfolio</span>
                <h1>
                  {`Hi! I'm Dilneth!`}
                  <br />
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[  "Mechatronics Engineer", "Robotics Engineer", "Mechanical Enginner", "Automation Enginner" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p>I am a third-year Mechatronics Engineering student at SAMK (Satakunta University of Applied Sciences) in Finland, with a focus on robotics, automation and the seamless integration of mechanical systems, electronics and software. Driven by a passion for innovation, I excel in developing efficient and forward-thinking solutions to complex engineering challenges. My primary interests lie in robotics, product development and system optimization, where I aim to contribute to advancements in smart technologies and sustainable engineering practices. With a commitment to excellence, I strive to make a meaningful impact on the future of technology and automation.</p>
                <button onClick={handleContactClick}>Connect with Me <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={robot5} alt="robot5" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
