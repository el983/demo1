import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Resgister';
import About from './pages/About';
import Whatsapp from './components/Whatsapp.';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signupImage from "./Screenshot_2025-01-23_124650-removebg-preview.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default
  const [isAnimating, setIsAnimating] = useState(true); // Enable animation initially

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1200); // Match CSS animation duration
  };

  return (
    <div className="App">
      {isModalOpen && (
        <div
          className={`overlay ${isAnimating ? "overlay-active" : ""}`}
          onClick={closeModal}
        >
          <div
            className={`modal ${isAnimating ? "modal-active" : ""}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="form-wrapper">

              {/* Close Button */}
              <button className="close-btn" onClick={closeModal}>
                &times; {/* Use a close icon (×) */}
              </button>
              {/* Left Section: Form */}
              <div className="form-left">
                <h2>Sign up</h2>
                <form className="form-container">
                  <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="input-group">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="input-group">
                    <i className="fas fa-phone"></i>
                    <input type="tel" placeholder="Your Contact No" required />
                  </div>

                  <div className="terms">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      I agree to all statements in <a href="#">Terms of service</a>
                    </label>
                  </div>
                  <button type="submit" className="register-btn">
                    Register
                  </button>
                </form>
              </div>
              {/* Right Section: Image */}
              <div className="form-right">
                <img src={signupImage} alt="Sign up illustration" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="scroll-watcher"></div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
