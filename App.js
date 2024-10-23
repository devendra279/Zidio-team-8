import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './Courses';
import HtmlCssCourse from './HtmlCssCourse'; // assuming this component represents htmlCss.html
import UiUxDesignCourse from './UiUxDesignCourse'; // assuming this component represents uiux.html
import AppDevelopment from './AppDevelopment'; // assuming this component represents appDevelopment.html
import DataScience from './DataScience'; // assuming this component represents dataScience.html
import WebDevelopmentCourse from './WebDevelopmentCourse'; // assuming this component represents webDevelopment.html

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/HtmlCssCourse" element={<HtmlCssCourse />} />
        <Route path="/UiUxDesignCourse" element={<UiUxDesignCourse />} />
        <Route path="/AppDevelopment" element={<AppDevelopment />} />
        <Route path="/DataScience" element={<DataScience />} />
        <Route path="/WebDevelopmentCourse" element={<WebDevelopmentCourse />} />
      </Routes>
    </Router>
  );
};

export default App;
