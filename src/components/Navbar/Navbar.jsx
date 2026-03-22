import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ isMenuOpen, toggleMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionLink = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <Link to="/" className="nav-logo">
        <div className="nav-logo-icon">M</div>
        <div className="nav-logo-text">Merch<span>Market</span></div>
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive && location.hash === '' ? 'active' : ''} end>
            Home
          </NavLink>
        </li>
        <li>
          <a href="/#why" onClick={(e) => handleSectionLink(e, 'why')} className={location.hash === '#why' ? 'active' : ''}>
            Why Us
          </a>
        </li>
        <li>
          <a href="/#how" onClick={(e) => handleSectionLink(e, 'how')} className={location.hash === '#how' ? 'active' : ''}>
            How It Works
          </a>
        </li>
        <li>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''}>
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
      <button
        className={`nav-toggle${isMenuOpen ? ' active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="nav-toggle-lines">
          <span></span><span></span><span></span>
        </div>
      </button>
    </nav>
  );
}
