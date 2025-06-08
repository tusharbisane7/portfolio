import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ACADEMIX"
              description="A collaborative EdTech platform that allows instructors and students to share learning materials.
Built with MERN stack and secured with OTP verification, it automates tasks using Selenium and provides role-based dashboards for efficient learning management."
              ghLink="https://github.com/tusharbisane7/academix"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce ChatBot"
              description="An AI-powered chatbot built with React, Flask, and PostgreSQL that enhances the online shopping experience. It responds to user queries, assists with product searches, and simulates purchases using natural language. The project showcases full-stack development, chatbot integration, and real-time customer interaction for modern e-commerce platforms."
              ghLink="https://github.com/tusharbisane7/ecommercechatbot"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Pulse Student"
              description="Pulse is a MERN-based student voting system that allows college students to raise and vote on issues like faculty performance, course delays, or sanitation problems. It bridges the gap between students and administration, enabling real-time, secure, and anonymous feedback to improve transparency and responsiveness in academic institutions."
              ghLink="https://github.com/tusharbisane7/"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
