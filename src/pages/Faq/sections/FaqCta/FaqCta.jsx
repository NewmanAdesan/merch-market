import { Link } from 'react-router-dom';
import { useReveal } from '../../../../hooks/useReveal';
import './FaqCta.css';

export default function FaqCta() {
  const [ref, isVisible] = useReveal();

  return (
    <div ref={ref} className={`faq-cta reveal reveal-delay-3${isVisible ? ' visible' : ''}`}>
      <div className="faq-cta-text">
        <h3>Still have <em>questions</em>?</h3>
        <p>Our team typically responds within 1–2 business days.</p>
      </div>
      <Link to="/contact" className="faq-cta-btn">
        Contact Us
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
}
