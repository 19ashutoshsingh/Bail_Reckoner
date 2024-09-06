import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UndertrialDashboard from './components/UndertrialDashboard';
import WelcomePage from './components/WelcomePage';
import LegalAidDashboard from './components/LegalAidDashboard';
import JudicialAuthority from './components/JudicialAuthority';
// import NewCase from './components/NewCase';  // Import NewCase component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/undertrial-dashboard" element={<UndertrialDashboard />} />
        <Route path="/legal-aid-dashboard" element={<LegalAidDashboard />} />
        <Route path="/judicial-authority" element={<JudicialAuthority />} />
        {/* <Route path="/new-case-modal" element={<NewCaseModal />} /> New case route */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
