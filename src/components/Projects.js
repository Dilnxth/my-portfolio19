import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import plasmacutter from "../assets/img/plasmacutter.png";
import workingsbc from "../assets/img/workingsbc.jpg";
import sawcutter from "../assets/img/sawcutter.png";
import speedometersbc from "../assets/img/speedometersbc.png";
import frontviewsbc from "../assets/img/frontviewsbc.jpg";
import rearviewsbc from "../assets/img/rearviewsbc.jpg";
import sbcarteam from "../assets/img/sbcarteam.jpg";
import designsbc from "../assets/img/designsbc.jpg";
import workingrobot from "../assets/img/workingrobot.jpg";
import ABBYuMI from "../assets/img/ABBYuMI.png"
import ABBIRB120 from "../assets/img/ABBIRB120.png";
import omronld90 from "../assets/img/omronld90.png";
import omrontm12 from "../assets/img/omrontm12.png";
import ur5e from "../assets/img/ur5e.png";
import trafficlight from "../assets/img/trafficlight.png";
import ballgameproj from "../assets/img/ballgameproj.png";
import ballgamesetup from "../assets/img/ballgamesetup.png";
import sensorsnv from "../assets/img/sensorsnv.png";
import solarkit from "../assets/img/solarkit.jpg";
import wiring from "../assets/img/wiring.png";
import frontvw from "../assets/img/frontvw.jpg";
import insidevw from "../assets/img/insidevw.jpg";
import hyundairobo from "../assets/img/hyundairobo.jpg";
import hansrobo from "../assets/img/hansrobo.jpg";
import capproj from "../assets/img/capproj.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [timePeriod, setTimePeriod] = useState("January 2024 - March 2024");

  // Projects organized into categories
  const projectsTab1 = [
    { title: "Precision in Action", description: "A snapshot of me using machining tools, demonstrating attention to detail and hands-on skills essential for building the soap box car.", imgUrl: workingsbc },
    { title: "Plasma Cutting in Progress", description: "Capturing the precision and craftsmanship as I use a plasma cutter to shape critical components of the car.", imgUrl: plasmacutter },
    { title: "Crafting with a Saw Machine", description: "Showcasing the use of a saw machine to cut materials accurately, ensuring the structural integrity of the car", imgUrl: sawcutter },
    { title: "Arduino-Powered Speedometer", description: "An image of the custom-built speedometer developed using Arduino, highlighting innovation in electronics integration.", imgUrl: speedometersbc },
    { title: "Front Suspension Design", description: "A front view of the car featuring the double-wishbone suspension system for enhanced stability and handling.", imgUrl: frontviewsbc },
    { title: "Rear Suspension Engineering", description: "The rear view of the soap box car, showcasing the swingarm suspension system for smooth performance.", imgUrl: rearviewsbc },
    { title: "The Team Behind the Build", description: "A group photo of the team that collaborated, bringing diverse skills together to complete the soap box car.", imgUrl: sbcarteam },
    { title: "SolidWorks Design Blueprint", description: "The detailed design of the soap box car created using SolidWorks, illustrating the concept before it came to life.", imgUrl: designsbc },
  ];

  const projectsTab2 = [
    { title: "Hands-On with ABB IRB 120", description: "A photo of me working with the ABB IRB 120 robot, demonstrating my practical understanding of Rapid programming and robotic operations.", imgUrl: workingrobot },
    { title: "ABB IRB 120 Robot", description: "Showcasing the ABB IRB 120, a compact industrial robot used to explore precise programming, safety protocols, and industrial automation tasks.", imgUrl: ABBIRB120 },
    { title: "Exploring ABB YuMi", description: "A view of the ABB YuMi robot, highlighting my experience with collaborative robots and their applications in safe and efficient automation systems.", imgUrl: ABBYuMI },
    { title: "Omron LD90 in Action", description: "Featuring the Omron LD90 mobile robot, a platform where I explored advanced navigation, task automation, and robotics integration.", imgUrl: omronld90 },
    { title: "Omron TM12 Robot", description: "Highlighting the Omron TM12 collaborative robot, where I gained expertise in programming and safety protocols for human-robot interaction.", imgUrl: omrontm12 },
    { title: "Universal Robots UR5e", description: "Showcasing the UR5e, a flexible collaborative robot that allowed me to apply programming techniques to real-world automation scenarios.", imgUrl: ur5e },
    { title: "Automated Tube Capping System", description: "This project showcases my skills in mechatronics and robotics, where we designed a custom 3D-printed gripper for the Hans Cobot, programmed for precise cap placement, and integrated pneumatic stoppers for accurate tube positioning. By resolving technical challenges, I delivered an efficient, scalable solution that improves precision and reduces manual labor in industrial automation.", imgUrl: capproj },
    { title: "Hyundai HH7 Robotic Arm with Kemppi A7", description: "This project reflects my proficiency in configuring industrial robotic arms like the Hyundai HH7 with the Kemppi A7 welding machine. My work focused on enhancing automation workflows, fine-tuning welding parameters, and ensuring consistent output in demanding industrial environments", imgUrl: hyundairobo },
    { title: "Hans Elfin5 Cobot with Kemppi Master M355", description: "Demonstrating my ability to program and deploy collaborative robots, this setup combines the Hans Elfin5 cobot with the Kemppi Master M355 welding machine. I optimized the system for precision welding tasks, ensuring safety and efficiency while maintaining high-quality results.", imgUrl: hansrobo },
  ];

  const projectsTab3 = [
    { title: "Traffic Light Automation", description: "A project demonstrating a traffic light control system using PLC programming, showcasing my understanding of sequential operations and timing control.", imgUrl: trafficlight },
    { title: "Valve and Sensor Control", description: "A setup where I programmed a PLC to manage various valves and sensors, highlighting my expertise in automation and process control.", imgUrl: sensorsnv },
    { title: "Ball Game Project", description: "An engaging project utilizing air-pumping cylinders and sensors to control a ball game system, emphasizing precision and creativity in PLC programming.", imgUrl: ballgameproj },
    { title: "Ball Game and Beyond", description: "A comprehensive setup showcasing the ball game alongside other completed projects, such as parking systems, AC motor control, lamp control, corridor lighting, and oil burner systems, reflecting my versatility and hands-on experience in PLC automation.", imgUrl: ballgamesetup },
  ];

  const projectsTab4 = [
    { title: "Sunlight Tracking with Arduino", description: "An image of the solar panel system developed with Arduino, where the LDR sensor tracks sunlight, and the servo motor adjusts the panel’s orientation for optimal exposure. This project highlights my ability to seamlessly integrate hardware and software, using Arduino to control sensors and actuators for efficient energy harvesting.", imgUrl: solarkit },
  ];

  const projectsTab5 = [
    { title: "Two- Way Switch Connection", description: "Demonstrated proficiency in electrical engineering by completing a two-way switch connection, showcasing the ability to control a single light source from two different locations efficiently.", imgUrl: wiring },
  ];

  const projectsTab6 = [
    { title: "Van Exterior - Diesel to Electric Evolution", description: "An image of the van’s exterior, representing our ambitious project to transform this classic diesel vehicle into a sustainable, fully electric model, reflecting innovation and engineering expertise.", imgUrl: frontvw },
    { title: "Van Interior - Preparing for Electric Transformation", description: "A view of the inside of the Volkswagen Transporter Type 2 van, showcasing the initial setup as we design and integrate components for its conversion to electric power. This includes plans to use Nissan Leaf batteries and a 12V system for auxiliary functions.", imgUrl: insidevw },
  ];

  // Map categories to time periods
  const timePeriods = {
    first: "January 2024 - April 2024",
    second: "January 2024 - Present",
    third: "January 2024 - May 2024",
    fourth: "January 2024 - May 2024",
    fifth: "January 2024 - May 2024",
    sixth: "August 2024 - Present",
  };

  const handleTabSelect = (selectedKey) => {
    setTimePeriod(timePeriods[selectedKey]); // Update time period dynamically
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    "Innovative Solutions, Engineered to Perfection."  Explore some of my recent projects.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={handleTabSelect}>
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Soap Box Car</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Robotics</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">PLC</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Solar Kit</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Electrical Wiring</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="sixth">VW Type 2 Van</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <div className="time-period text-center mb-4">
                      <h5>{timePeriod}</h5>
                    </div>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {projectsTab4.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <Row>
                          {projectsTab5.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="sixth">
                        <Row>
                          {projectsTab6.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
