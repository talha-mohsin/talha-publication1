import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing your page components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Reviews from './pages/Reviews/Reviews';
import Services from './pages/Services/Services';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;