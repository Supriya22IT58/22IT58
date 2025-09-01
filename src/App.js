import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./frontend/Home";
import Login from "./frontend/Login";
import Register from "./frontend/Register";
import UrlShortner from "./frontend/UrlShortner";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shorten" element={<UrlShortner />} />
      </Routes>
    </Router>
  );
}

export default App;
