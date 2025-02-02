import React from "react";
import Registration from "./components/Registration";
import OrganizationSetup from "./components/OrganizationSetup";
import ChatbotIntegration from "./components/ChatbotIntegration";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link className="navbar_link" to="/">
            Register
          </Link>
          <Link className="navbar_link" to="/setup">
            Setup Organization
          </Link>
          <Link className="navbar_link" to="/integration">
            Chatbot Integration
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/setup" element={<OrganizationSetup />} />
          <Route path="/integration" element={<ChatbotIntegration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
