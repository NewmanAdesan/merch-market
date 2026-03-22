import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import FaqPage from './pages/Faq/FaqPage';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
