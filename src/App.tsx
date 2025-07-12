import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ChannelGrid from './components/ChannelGrid';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
function App() {
   
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/channels" element={<ChannelGrid />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
