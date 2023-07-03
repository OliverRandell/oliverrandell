import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Me user={user} />} />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/work" element={<Work user={user} />} />
        <Route path="/education" element={<Education user={user} />} />
      </Routes>
    </HashRouter>
  );
};

export default Pages;