import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Import the Navbar component
import Home from "./pages/home";
import About from "./pages/About";
import Courses from "./pages/courses";
import Form from "./pages/form";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will appear on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
