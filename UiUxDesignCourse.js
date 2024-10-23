import React, { useState } from 'react';
import './style.css';

const UiUxDesignCourse = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div id="box">
        <p id="para2">UI/UX Design</p>
        <p>
          This course offers an in-depth exploration of user interface (UI) and user experience (UX) design principles. Students will learn to create intuitive, user-friendly interfaces through user research, wireframing, prototyping, and visual design. The course also covers usability testing and the use of industry-standard design tools. Students will apply their knowledge in a capstone project, designing a full UI/UX solution for a real-world problem.
        </p>

        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(0)}>
              <p id="para3">Course Requirements</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Basic understanding of graphic design principles.</li>
                  <li>Familiarity with web development (HTML, CSS, JavaScript).</li>
                  <li>Basic knowledge of human-computer interaction (HCI) is beneficial but not mandatory.</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item-header" onClick={() => toggleAccordion(1)}>
              <p id="para3">Course Outcomes</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Understand UI/UX Principles: Comprehend fundamental UI/UX design principles and best practices.</li>
                  <li>Conduct User Research: Perform user research to gather insights and understand user needs and behaviors.</li>
                  <li>Create Wireframes and Prototypes: Develop wireframes and interactive prototypes to visualize design ideas.</li>
                  <li>Apply Visual Design Skills: Utilize visual design principles to create aesthetically pleasing and functional interfaces.</li>
                  <li>Design Interactive Experiences: Implement interaction design principles to enhance user engagement.</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item-header" onClick={() => toggleAccordion(2)}>
              <p id="para3">Instructor</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 2 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                Mis. Salma Husna Salsabila
                <br />
                0 Rating
                <br />
                0 Reviews
                <br />
                357 Students
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

export default UiUxDesignCourse;
