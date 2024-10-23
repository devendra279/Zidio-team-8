import React, { useState } from 'react';
import './style.css';

const HtmlCssCourse = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div id="box">
        <p id="para2">HTML/CSS</p>
        <p>
          This course provides a comprehensive introduction to the foundational technologies of the web: HTML and CSS. The course begins with an exploration of HTML, the standard markup language used to create web pages, and progresses to CSS, the language used to style and layout web pages. Students will learn how to structure content using HTML elements, create forms, and embed multimedia. They will also learn how to style their pages using CSS, including layout techniques, responsive design, and best practices for maintaining clean, maintainable code. By the end of the course, students will be able to build well-structured, visually appealing, and responsive websites.
        </p>

        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(0)}>
              <p id="para3">Course Requirements</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Basic Computer Skills: Familiarity with using a computer, including navigating the web, using a text editor, and managing files.</li>
                  <li>Internet Access: Students should have access to a reliable internet connection to explore web resources and tools.</li>
                  <li>Text Editor: Students should have a text editor installed (e.g., VS Code, Sublime Text, or Atom).</li>
                  <li>Web Browser: A modern web browser (e.g., Chrome, Firefox, Edge) for testing and previewing web pages.</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item-header" onClick={() => toggleAccordion(1)}>
              <p id="para3">Course Outcomes</p>
            </div>
            <div className={`accordion-item-body ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="accordion-item-body-content">
                <ul>
                  <li>Understand and Apply HTML: Create and structure web content using HTML elements, including text, images, links, lists, tables, forms, and multimedia.</li>
                  <li>Utilize CSS for Styling: Apply CSS to control the appearance of web pages, including colors, fonts, spacing, borders, and positioning.</li>
                  <li>Implement Responsive Design: Use CSS techniques such as media queries and flexbox/grid layouts to create responsive websites that work well on different devices and screen sizes.</li>
                  <li>Develop and Deploy Web Pages: Build complete web pages from scratch, including the use of external stylesheets, and publish them to the web.</li>
                  <li>Practice Web Standards and Best Practices: Write semantic HTML and clean, maintainable CSS, following modern web standards and accessibility guidelines.</li>
                  <li>Debug and Test Web Pages: Use developer tools in web browsers to inspect and debug HTML/CSS code, ensuring that web pages function correctly and look good across different browsers.</li>
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

export default HtmlCssCourse;
