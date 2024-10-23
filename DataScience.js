import React, { useState } from 'react';
import './style.css'; // Ensure your CSS is in this file

const DataScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div id="box">
        <p id="para2">Data Science</p>
        <p>
          This course provides a comprehensive introduction to data science, covering the essential concepts and tools used to analyze and interpret complex data. Students will learn statistical methods, programming skills, data visualization techniques, machine learning algorithms, and the ethical considerations of data use. The course combines theoretical knowledge with practical applications, culminating in a capstone project where students will apply their learning to solve real-world problems.
        </p>
        <div className="accordion">
          {/* Course Requirements */}
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(0)}>
              <p id="para3">Course Requirements</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Basic understanding of statistics and probability.</li>
                  <li>Proficiency in programming (Python/R recommended).</li>
                  <li>Familiarity with basic concepts in calculus and linear algebra.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Course Outcomes */}
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(1)}>
              <p id="para3">Course Outcomes</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <p>By the end of this course, students will be able to:</p>
                <ul>
                  <li>Understand and Apply Key Concepts: Grasp fundamental data science concepts, including statistics, machine learning, and data visualization.</li>
                  <li>Develop Programming Skills: Write efficient code in Python or R for data analysis and machine learning tasks.</li>
                  <li>Analyze and Interpret Data: Use statistical methods to analyze and draw conclusions from data.</li>
                  <li>Build Machine Learning Models: Develop, evaluate, and optimize machine learning models for various applications.</li>
                  <li>Visualize Data Effectively: Create insightful visualizations to communicate data-driven insights.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instructor Information */}
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(2)}>
              <p id="para3">Instructor</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 2 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <p>Mr. Chandan Mishra</p>
                <p>1 Rating</p>
                <p>1 Reviews</p>
                <p>480 Students</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enroll Now Button */}
        <div className="accordion-item-header">
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
