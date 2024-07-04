import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mesprojets" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export { Router };


