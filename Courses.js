import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const Courses = () => {
  return (
    <div>
      <p id="para1">Courses Available</p>

      <div className="content">
        <div className="course1" id="c">
          <Link to="/HtmlCssCourse">
            <img src="hc.jpeg" alt="HTML/CSS" />
          </Link>
          <Link to="/HtmlCssCourse">
            <p>HTML/CSS</p>
          </Link>
        </div>

        <div className="course2" id="c">
          <Link to="/UiUxDesignCourse">
            <img src="uiux.jpeg" alt="UI/UX Design" />
          </Link>
          <Link to="UiUxDesignCourse">
            <p>UI/UX Design</p>
          </Link>
        </div>

        <div className="course3" id="c">
          <Link to="/AppDevelopment">
            <img src="ad.jpeg" alt="App Development" />
          </Link>
          <Link to="/AppDevelopment">
            <p>App Development</p>
          </Link>
        </div>
      </div>

      <div className="content">
        <div className="course4" id="c">
          <Link to="/DataScience">
            <img src="ds.jpg" alt="Data Science" />
          </Link>
          <Link to="/DataScience">
            <p>Data Science</p>
          </Link>
        </div>

        <div className="course5" id="c">
          <Link to="/WebDevelopmentCourse">
            <img src="wd.jpg" alt="Web Development" />
          </Link>
          <Link to="/WebDevelopmentCourse">
            <p>Web Development</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
