import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LandingPageCopy from './components/LandingPageCopy';
import Portfolio from './components/Portfolio';
import GraffitiGallery from './components/GraffitiGallery';
import Clothing from './components/Clothing';
import './styles/App.css';
import './styles/StarBackground.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/more" element={<LandingPageCopy />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/videos" element={<GraffitiGallery />} />
        <Route path="/music" element={<Clothing />} />
      </Routes>
    </Router>
  );
}

export default App; 