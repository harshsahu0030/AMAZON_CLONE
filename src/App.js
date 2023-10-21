import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavFooter from "./components/NavFooter";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BackToTop />
      <NavFooter />
      <Footer />
    </Router>
  );
};

export default App;
