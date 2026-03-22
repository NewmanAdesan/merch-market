import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">M</div>
              <div className="footer-logo-text">Merch<span>Market</span></div>
            </div>
            <p>The private B2B marketplace connecting verified buyers and trusted sellers across the UK and EU.</p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#why" onClick={(e) => handleSectionLink(e, 'why')}>Why Us</a></li>
              <li><a href="/#how" onClick={(e) => handleSectionLink(e, 'how')}>How It Works</a></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MerchMarket. All rights reserved.</p>
          <p>support@merchmarket.com</p>
        </div>
      </div>
    </footer>
  );
}
