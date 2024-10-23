import React, { useState } from 'react';
import './style.css';

const WebDevelopmentCourse = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div id="box">
        <p id="para2">Web Development</p>
        <p>
          This course provides a comprehensive guide to full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Students will learn how to build modern, scalable web applications, from front-end interfaces to back-end servers and databases. The course covers essential concepts such as RESTful API development, state management, authentication, and deployment. Practical projects and a capstone project will solidify the understanding and application.
        </p>

        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(0)}>
              <p id="para3">Course Requirements</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Basic understanding of web development concepts (HTML, CSS, JavaScript).</li>
                  <li>Familiarity with basic programming concepts.</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item-header" onClick={() => toggleAccordion(1)}>
              <p id="para3">Course Outcomes</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Understand Web Development Fundamentals: Master HTML, CSS, and JavaScript to create dynamic web pages.</li>
                  <li>Develop Server-Side Applications: Use Node.js and Express.js to build robust server-side applications.</li>
                  <li>Work with Databases: Implement MongoDB for data storage and retrieval in web applications.</li>
                  <li>Build Front-End Interfaces: Create interactive user interfaces using React.js.</li>
                  <li>Integrate MERN Stack Components: Combine MongoDB, Express.js, React.js, and Node.js to build full-stack applications.</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item-header" onClick={() => toggleAccordion(2)}>
              <p id="para3">Instructor</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 2 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                Mr. Animesh Singh
                <br />
                3.6 Rating
                <br />
                10 Reviews
                <br />
                1466 Students
              </div>
            </div>

            <div className="accordion-item-header">
              <button>Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentCourse;
