import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Halwa from './Pages/Halwa';
import Product from './Pages/Product';
import Sweets from './Pages/Sweets';

import Login from './Pages/Login';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Halwa" element={<Halwa />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Sweets" element={<Sweets />} />

        <Route path="/Login" element={<Login />} />

        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();