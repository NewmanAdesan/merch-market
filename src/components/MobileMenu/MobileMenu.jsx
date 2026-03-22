import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './MobileMenu.css';

const ArrowIcon = () => (
  <svg className="mobile-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    const handleResize = () => {
      if (window.innerWidth > 1100 && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);

  const handleSectionLink = (e, sectionId) => {
    e.preventDefault();
    onClose();
    if (location.pathname === '/') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`mobile-menu${isOpen ? ' active' : ''}`}>
      <div className="mobile-menu-backdrop" onClick={onClose}></div>
      <div className="mobile-menu-panel">
        <div className="mobile-menu-decor"></div>
        <div className="mobile-menu-header">
          <div className="mobile-menu-label">Navigation</div>
        </div>
        <ul className="mobile-menu-nav">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''} onClick={handleLinkClick}>
              Home <ArrowIcon />
            </Link>
          </li>
          <li>
            <a href="/#why" className="" onClick={(e) => handleSectionLink(e, 'why')}>
              Why Us <ArrowIcon />
            </a>
          </li>
          <li>
            <a href="/#how" className="" onClick={(e) => handleSectionLink(e, 'how')}>
              How It Works <ArrowIcon />
            </a>
          </li>
          <li>
            <Link to="/faq" className={isActive('/faq') ? 'active' : ''} onClick={handleLinkClick}>
              FAQ <ArrowIcon />
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={handleLinkClick}>
              Contact <ArrowIcon />
            </Link>
          </li>
        </ul>
        <div className="mobile-menu-footer">
          <p>The private B2B marketplace for verified businesses across the UK &amp; EU.</p>
          <p style={{ marginTop: '12px' }}><a href="mailto:support@merchmarket.com">support@merchmarket.com</a></p>
        </div>
      </div>
    </div>
  );
}
