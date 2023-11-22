import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
// import Projects from './Projects';
// import Work from './Work';
// import Education from './Education';
import About from './About';
import Contact from './Contact';

const Pages = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        {/* <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/work" element={<Work user={user} />} />
        <Route path="/education" element={<Education user={user} />} /> */}
        <Route path="/about" element={<About user={user} />} />
        <Route path="/contact" element={<Contact user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;