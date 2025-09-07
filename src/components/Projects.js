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
import frontvw from "../assets/img/frontvw.jpg";
import insidevw from "../assets/img/insidevw.jpg";
import hyundairobo from "../assets/img/hyundairobo.jpg";
import hansrobo from "../assets/img/hansrobo.jpg";
import motoman from "../assets/img/motoman.jpg";
import baterynx100 from "../assets/img/batterynx100.jpg";
import capproj from "../assets/img/capproj.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

// Import new project assets
// Smartphone-controlled kart
import kartPresentation from "../assets/img/kartpres.jpg";
import kartTeamDiscussion from "../assets/img/kartdis.jpg";
import kartOutput from "../assets/img/kartoutcome.jpg";
import kartTeam from "../assets/img/kartteam.jpg";
import kartCertificate from "../assets/img/kartcerti.jpg";

// Steam engine
import steamPresentation from "../assets/img/steampres.jpg";
import steamTeamDiscussion from "../assets/img/steamdis.jpg";
import steamTeam from "../assets/img/steamteam.jpg";

// Pyramid box palletizing
import palletizingOperation from "../assets/img/HC20vdo.mp4";
import robodkSimulation from "../assets/img/HC20RoboDK.mp4";
import palletizingTeam from "../assets/img/HC20team.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  // Project data with descriptions, locations, and technologies
  const projectData = {
    first: {
      title: "Soap Box Car",
      description: "A custom soap box car designed with a balance of functionality and creativity. The build includes an independent suspension system (front and rear) for improved handling, removable components for simplified maintenance, an Arduino-based digital speedometer for performance tracking, and disc brakes for reliable stopping power. The structure was modeled in SolidWorks to ensure precision and an aerodynamic form. A 'Bad Piggies' theme was applied to enhance visual appeal and create a recognizable identity.",
      location: "Satakunta University of Applied Sciences, Finland",
      timePeriod: "January 2024 - April 2024",
      technologies: ["SolidWorks", "PrusaSlicer", "Arduino", "CNC Machining", "Plasma Cutting", "Power Tools"],
      projects: [
        { title: "Precision in Action", description: "A snapshot of me using machining tools, demonstrating attention to detail and hands-on skills essential for building the soap box car.", imgUrl: workingsbc },
        { title: "Plasma Cutting in Progress", description: "Capturing the precision and craftsmanship as I use a plasma cutter to shape critical components of the car.", imgUrl: plasmacutter },
        { title: "Crafting with a Saw Machine", description: "Showcasing the use of a saw machine to cut materials accurately, ensuring the structural integrity of the car", imgUrl: sawcutter },
        { title: "Arduino-Powered Speedometer", description: "An image of the custom-built speedometer developed using Arduino, highlighting innovation in electronics integration.", imgUrl: speedometersbc },
        { title: "Front Suspension Design", description: "A front view of the car featuring the double-wishbone suspension system for enhanced stability and handling.", imgUrl: frontviewsbc },
        { title: "Rear Suspension Engineering", description: "The rear view of the soap box car, showcasing the swingarm suspension system for smooth performance.", imgUrl: rearviewsbc },
        { title: "The Team Behind the Build", description: "A group photo of the team that collaborated, bringing diverse skills together to complete the soap box car.", imgUrl: sbcarteam },
        { title: "SolidWorks Design Blueprint", description: "The detailed design of the soap box car created using SolidWorks, illustrating the concept before it came to life.", imgUrl: designsbc },
      ]
    },
    second: {
      title: "Robotics",
      description: "Comprehensive exploration of industrial and collaborative robotics systems, including programming, maintenance, and automation solutions. Projects encompass various robotic platforms from ABB, Omron, Universal Robots, and Yaskawa, demonstrating versatility in robotic applications.",
      location: "Satakunta University of Applied Sciences, Finland",
      timePeriod: "January 2024 - Present",
      technologies: ["ABB RobotStudio", "RAPID Programming", "UR Script", "Visual Components", "RoboDK", "Cognex In-sight Explorer "],
      projects: [
        { title: "Hands-On with ABB IRB 120", description: "A photo of me working with the ABB IRB 120 robot, demonstrating my practical understanding of Rapid programming and robotic operations.", imgUrl: workingrobot },
        { title: "ABB IRB 120 Robot", description: "Showcasing the ABB IRB 120, a compact industrial robot used to explore precise programming, safety protocols, and industrial automation tasks.", imgUrl: ABBIRB120 },
        { title: "Exploring ABB YuMi", description: "A view of the ABB YuMi robot, highlighting my experience with collaborative robots and their applications in safe and efficient automation systems.", imgUrl: ABBYuMI },
        { title: "Omron LD90 in Action", description: "Featuring the Omron LD90 mobile robot, a platform where I explored advanced navigation, task automation, and robotics integration.", imgUrl: omronld90 },
        { title: "Omron TM12 Robot", description: "Highlighting the Omron TM12 collaborative robot, where I gained expertise in programming and safety protocols for human-robot interaction.", imgUrl: omrontm12 },
        { title: "Universal Robots UR5e", description: "Showcasing the UR5e, a flexible collaborative robot that allowed me to apply programming techniques to real-world automation scenarios.", imgUrl: ur5e },
        { title: "Automated Tube Capping System", description: "This project showcases my skills in mechatronics and robotics, where we designed a custom 3D-printed gripper for the Hans Cobot, programmed for precise cap placement, and integrated pneumatic stoppers for accurate tube positioning.", imgUrl: capproj },
        { title: "Hyundai HH7 Robotic Arm with Kemppi A7", description: "This project reflects my proficiency in configuring industrial robotic arms like the Hyundai HH7 with the Kemppi A7 welding machine for enhanced automation workflows.", imgUrl: hyundairobo },
        { title: "Hans Elfin5 Cobot with Kemppi Master M355", description: "Demonstrating my ability to program and deploy collaborative robots, this setup combines the Hans Elfin5 cobot with the Kemppi Master M355 welding machine.", imgUrl: hansrobo },
        { title: "Yaskawa Motoman NX100 Robot Servicing & Diagnostics", description: "Highlighting my skills in robotic maintenance and programming, this project involved servicing a Yaskawa Motoman NX100 robot with comprehensive diagnostics.", imgUrl: motoman },
        { title: "Battery Replacement on Yaskawa Motoman NX100", description: "Performed essential maintenance on the Yaskawa Motoman NX100 by replacing its backup batteries, ensuring steady power supply and operational efficiency.", imgUrl: baterynx100 },
      ]
    },
    third: {
      title: "PLC Programming",
      description: "Advanced programmable logic controller (PLC) programming projects demonstrating expertise in industrial automation, process control, and system integration. Projects include traffic control systems, pneumatic controls, and interactive automation solutions.",
      location: "Satakunta University of Applied Sciences, Finland",
      timePeriod: "January 2024 - May 2024",
      technologies: ["Ladder Logic", "Function Block Diagram", "Sequential Function Chart", "HMI Design", "Pneumatic Systems", "Sensor Integration"],
      projects: [
        { title: "Traffic Light Automation", description: "A project demonstrating a traffic light control system using PLC programming, showcasing my understanding of sequential operations and timing control.", imgUrl: trafficlight },
        { title: "Valve and Sensor Control", description: "A setup where I programmed a PLC to manage various valves and sensors, highlighting my expertise in automation and process control.", imgUrl: sensorsnv },
        { title: "Ball Game Project", description: "An engaging project utilizing air-pumping cylinders and sensors to control a ball game system, emphasizing precision and creativity in PLC programming.", imgUrl: ballgameproj },
        { title: "Ball Game and Beyond", description: "A comprehensive setup showcasing the ball game alongside other completed projects, reflecting my versatility and hands-on experience in PLC automation.", imgUrl: ballgamesetup },
      ]
    },
    fourth: {
      title: "Solar Tracking System",
      description: "Arduino-based solar panel tracking system utilizing LDR sensors and servo motors for optimal sunlight exposure. This project demonstrates integration of renewable energy concepts with embedded systems programming and sensor-actuator control.",
      location: "Satakunta University of Applied Sciences, Finland",
      timePeriod: "January 2024 - May 2024",
      technologies: ["Arduino IDE", "C++", "Environmental Sensors", "Servo Motors" ],
      projects: [
        { title: "Sunlight Tracking with Arduino", description: "An image of the solar panel system developed with Arduino, where the LDR sensor tracks sunlight, and the servo motor adjusts the panel's orientation for optimal exposure.", imgUrl: solarkit },
      ]
    },
    fifth: {
      title: "Smartphone-Controlled Kart",
      description: "A custom-built kart controlled through a mobile application, featuring a SolidWorks-designed and 3D-printed steering system powered by a 35 kg servo motor, 3D-printed battery brackets for secure mounting, and a CNC-fabricated wooden frame to house all major components. Performance was refined through iterative testing and system optimization to ensure smooth handling and reliable operation.",
      location: "EPHEC, Brussels, Belgium",
      timePeriod: "February 2025",
      technologies: ["SolidWorks", "AutoCAD", "PrusaSlicer", "Arduino", "Servo Control", "CNC Machining"],
      projects: [
        { title: "Project Presentation", description: "Presenting the smartphone-controlled kart project, showcasing the design concept, technical specifications, and innovative features.", imgUrl: kartPresentation },
        { title: "Team Discussion", description: "Collaborative team meeting discussing the technical challenges, component selection, and implementation strategies for the smartphone-controlled kart project.", imgUrl: kartTeamDiscussion },
        { title: "Project Team", description: "The dedicated team that collaborated to design and build the smartphone-controlled kart, combining expertise in electronics, programming, and mechanical engineering.", imgUrl: kartTeam },
        { title: "Final Output", description: "The completed smartphone-controlled kart in action, demonstrating successful integration of mobile app control with mechanical systems.", imgUrl: kartOutput },
        { title: "Achievement Certificate", description: "Official recognition certificate acknowledging the successful completion and innovation demonstrated in the smartphone-controlled kart project.", imgUrl: kartCertificate },
      ]
    },
    sixth: {
      title: "High-Efficiency Steam Engine",
      description: "A Wilesco D202 steam engine was enhanced with infrared, inductive, pressure, and potentiometer sensors for real-time data collection, while a smart socket enabled dynamic control of heat input. A Beckhoff PLC programmed in TwinCAT automated and managed the process, with data transmitted to an MQTT broker and visualized in Node-Red. Machine learning algorithms were applied to predict output and optimize efficiency, achieving an OEE of 68.277%, one of the highest results in the competition.",
      location: "Hogeschool PXL University, Hasselt, Belgium",
      timePeriod: "February 2025",
      technologies: ["SolidWorks", "TwinCAT", "Beckhoff PLC", "MQTT", "Node-Red", "Grafana", "ML libraries in Python", "IoT Sensors"],
      projects: [
        { title: "Technical Discussion", description: "Team brainstorming session focusing on the technical aspects, material selection, and efficiency maximization approaches for building the most efficient steam engine.", imgUrl: steamTeamDiscussion },
        { title: "Steam Engine Presentation", description: "Presenting the innovative steam engine project, highlighting the cutting-edge technology implementation and efficiency optimization strategies used in the design.", imgUrl: steamPresentation },
        { title: "Engineering Team", description: "The skilled engineering team that collaborated to design and build the most efficient steam engine, applying advanced thermodynamics principles.", imgUrl: steamTeam },
      ]
    },
    seventh: {
      title: "Pyramid Box Palletizing Robot",
      description: "Advanced robotic automation system using Yaskawa HC20 robot for precise pyramid box palletizing operations. This project demonstrates expertise in path planning, collision avoidance, RoboDK simulation, and industrial material handling automation.",
      location: "Satakunta University of Applied Sciences, Finland",
      timePeriod: "February 2025 - March 2025",
      technologies: ["RoboDK", "Yaskawa Programming", "Path Planning", "Robot Calibration"],
      projects: [
        { title: "System Operation", videoUrl: palletizingOperation },
        { title: "RoboDK Simulation", videoUrl: robodkSimulation },
        { title: "Palletizing Team", description: "The expert team responsible for programming and implementing the Yaskawa HC20 pyramid box palletizing system, combining robotics expertise with automation engineering.", imgUrl: palletizingTeam },
      ]
    },
    eighth: {
      title: "VW Type 2 Van Electric Conversion",
      description: "Sustainable automotive engineering project converting a classic Volkswagen Transporter Type 2 van from diesel to fully electric power. This ambitious project involves battery integration, electric drivetrain installation, and sustainable transportation solutions.",
      location: "Satakunta University of Applied Sciences, Finland",
      timePeriod: "August 2024 - Present",
      technologies: ["AutoCAD", "Electric Vehicle Systems", "Battery Management", "Power Electronics"],
      projects: [
        { title: "Van Exterior - Diesel to Electric Evolution", description: "An image of the van's exterior, representing our ambitious project to transform this classic diesel vehicle into a sustainable, fully electric model.", imgUrl: frontvw },
        { title: "Van Interior - Preparing for Electric Transformation", description: "A view of the inside of the Volkswagen Transporter Type 2 van, showcasing the initial setup as we design and integrate components for its conversion to electric power.", imgUrl: insidevw },
      ]
    }
  };

  const handleTabSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  const currentProject = projectData[activeTab];

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
                    "Innovative Solutions, Engineered to Perfection." Explore some of my recent projects.
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
                        <Nav.Link eventKey="fifth">Smart Kart</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="sixth">Steam Engine</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="seventh">Palletizing Robot</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="eighth">VW Type 2 Van</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    
                    {/* Project Header Section */}
                    <div className="project-header">
                      <div className="time-period-location">
                        <h5 className="time-period">{currentProject.timePeriod}</h5>
                        <h6 className="project-location">{currentProject.location}</h6>
                      </div>
                      <div className="project-description">
                        <p>{currentProject.description}</p>
                      </div>
                      <div className="project-technologies">
                        <div className="technologies-container">
                          <span className="technologies-title">Technologies & Tools</span>
                          <span className="technologies-separator">-</span>
                          <div className="technologies-list">
                            {currentProject.technologies.map((tech, index) => (
                              <span key={index} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectData.first.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectData.second.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectData.third.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {projectData.fourth.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <Row>
                          {projectData.fifth.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="sixth">
                        <Row>
                          {projectData.sixth.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="seventh">
                        <Row>
                          {projectData.seventh.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="eighth">
                        <Row>
                          {projectData.eighth.projects.map((project, index) => (
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