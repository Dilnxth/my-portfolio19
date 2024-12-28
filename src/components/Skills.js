import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import solidworks2 from "../assets/img/solidworks2.png";
import autocad from "../assets/img/autocad.png";
import arduino from "../assets/img/arduino.png";
import plc1 from "../assets/img/plc1.png";
import python from "../assets/img/python.png";
import ee2 from "../assets/img/ee2.png";
import mt2 from "../assets/img/mt2.png";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => (
  <button
    className="custom-arrow custom-arrow-left"
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '40%',
      left: '5px', // Adjust this to make the arrow visible
      transform: 'translateY(-50%)',
      zIndex: 10,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    <img src={arrow1} alt="Left Arrow" style={{ width: '30px', height: '30px' }} />
  </button>
);

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => (
  <button
    className="custom-arrow custom-arrow-right"
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '40%',
      right: '5px', // Adjust this to make the arrow visible
      transform: 'translateY(-50%)',
      zIndex: 10,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    <img src={arrow2} alt="Right Arrow" style={{ width: '30px', height: '30px' }} />
  </button>
);

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              Innovative problem-solver with expertise in robotics, 2D/3D design, and mechatronic system integration. 
                <br />
                I am adept at
              </p>
              <Carousel
                responsive={responsive}
                infinite
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={solidworks2} alt="Solid Works" />
                  <h5>Solid Works</h5>
                </div>
                <div className="item">
                  <img src={autocad} alt="AutoCAD" />
                  <h5>Auto CAD</h5>
                </div>
                <div className="item">
                  <img src={arduino} alt="Arduino" />
                  <h5>Arduino</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={plc1} alt="PLC Programming" />
                  <h5>PLC Programming</h5>
                </div>
                <div className="item">
                  <img src={ee2} alt="Electrical Engineering" />
                  <h5>Electrical Engineering</h5>
                </div>
                <div className="item">
                  <img src={mt2} alt="Mechanical Tools" />
                  <h5>Mechanical Tools</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
