import { useReveal } from '../../../../hooks/useReveal';
import './ContactCards.css';

export default function ContactCards() {
  const [card1Ref, card1Visible] = useReveal();
  const [card2Ref, card2Visible] = useReveal();
  const [card3Ref, card3Visible] = useReveal();

  return (
    <div className="contact-cards">
      <div ref={card1Ref} className={`contact-card reveal${card1Visible ? ' visible' : ''}`}>
        <div className="contact-card-header">
          <div className="contact-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <h3>General Enquiries</h3>
        </div>
        <p>For questions about the platform, membership eligibility, or marketplace access — reach out and we'll point you in the right direction.</p>
        <a href="mailto:support@merchmarket.com" className="contact-card-email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          support@merchmarket.com
        </a>
      </div>

      <div ref={card2Ref} className={`contact-card reveal reveal-delay-1${card2Visible ? ' visible' : ''}`}>
        <div className="contact-card-header">
          <div className="contact-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>Seller Applications</h3>
        </div>
        <p>Interested in listing your products or services? Apply for membership and our onboarding team will review your application.</p>
        <a href="#" className="contact-card-cta">
          Apply for Membership
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>

      <div ref={card3Ref} className={`contact-card reveal reveal-delay-2${card3Visible ? ' visible' : ''}`}>
        <div className="contact-card-header">
          <div className="contact-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>Partnerships &amp; Resellers</h3>
        </div>
        <p>If you're interested in becoming a loyalty credit reseller or marketplace partner, we'd love to hear from you.</p>
        <a href="mailto:partners@merchmarket.com" className="contact-card-email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          partners@merchmarket.com
        </a>
      </div>
    </div>
  );
}
