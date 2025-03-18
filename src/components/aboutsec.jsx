import React from "react";
import "./aboutsec.css";

function AboutSection() {
  return (
    <>
      <div className="section-box">
        <div className="detail-me">
          <img
            src="/path/to/profile.jpg"
            alt="Profile"
            className="profile-image"
          />
          <h3 className="name-me">Name: Astro</h3>
          <h3 className="age">Age: 20</h3>
          <h3 className="location">Location: Ahmedabad, gujrat, india</h3>
          <div className="contact-info">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="skills-summary">
            <h5>
              Skills: Web Development, Programming Languages, Backend
              Development, Extra Tools
            </h5>
          </div>
          <h5>
            Hi, I'm Astro, a passionate web developer with a knack for creating
            dynamic and responsive web applications.
          </h5>
          <h5>
            Professional Summary: With over 3 years of experience in web
            development, I specialize in building scalable and efficient
            applications using modern technologies.
          </h5>
          <h5>
            Key Achievements: Successfully led a team to develop a high-traffic
            e-commerce platform, improving load times by 30%.
          </h5>
          <h5>
            Future Goals: Aiming to deepen my expertise in AI and machine
            learning to create innovative solutions.
          </h5>
          <h5>
            Experience: Worked on various projects involving modern web
            technologies like React, Node.js, and more.
          </h5>
          <h5>
            Education: Bachelor's degree in Computer Science from XYZ
            University.
          </h5>
          <h5>
            Hobbies: In my free time, I enjoy exploring new tech trends, playing
            video games, and hiking.
          </h5>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
