import React, { useState } from 'react';
import './style.css';

const AppDevelopment = () => {
  // Managing accordion state
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div id="box">
        <p id="para2">App Development</p>
        <p>
          This course offers an in-depth exploration of mobile app development using Flutter, an open-source UI software development kit created by Google. Students will learn to build cross-platform mobile applications with a single codebase. The course covers fundamental concepts of Flutter and Dart, state management, UI design, API integration, Firebase integration, and app deployment. Practical projects and a capstone project will help students apply their learning in real-world scenarios.
        </p>
        
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(0)}>
              <p id="para3">Course Requirements</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Basic understanding of programming concepts.</li>
                  <li>Familiarity with object-oriented programming (OOP) is beneficial.</li>
                  <li>Basic knowledge of Dart programming language is recommended but not mandatory.</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item-header" onClick={() => toggleAccordion(1)}>
              <p id="para3">Course Outcomes</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Understand Flutter and Dart Basics: Comprehend the fundamentals of Flutter and the Dart programming language.</li>
                  <li>Build User Interfaces: Create visually appealing and responsive UIs using Flutter widgets and layouts.</li>
                  <li>Manage State Effectively: Implement state management techniques to manage app state efficiently.</li>
                  <li>Develop Responsive Apps: Design and build apps that adapt to different screen sizes and orientations.</li>
                  <li>Work with APIs and Data: Integrate APIs to fetch and display data in Flutter applications.</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item-header" onClick={() => toggleAccordion(2)}>
              <p id="para3">Instructor</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 2 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <p>Mr. Animesh Singh</p>
                <p>3.6 Rating</p>
                <p>10 Reviews</p>
                <p>1466 Students</p>
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

export default AppDevelopment;
