import { Link } from 'react-router-dom';
import { useReveal } from '../../../../hooks/useReveal';
import SectionLabel from '../../../../components/ui/SectionLabel';
import './CtaSection.css';

export default function CtaSection() {
  const [ref, isVisible] = useReveal();

  return (
    <section className="cta-section">
      <div ref={ref} className={`cta-inner reveal${isVisible ? ' visible' : ''}`}>
        <SectionLabel>Join the Marketplace</SectionLabel>
        <h2 className="section-title">Access verified buyers and sellers across the <em>UK &amp; EU</em> today</h2>
        <p className="section-desc">Apply for membership and join a network of vetted businesses trading securely across sectors and borders.</p>
        <div className="hero-ctas">
          <a href="#" className="btn btn-primary btn-primary-lg">
            Apply for Membership
            <svg style={{marginLeft:'8px'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
