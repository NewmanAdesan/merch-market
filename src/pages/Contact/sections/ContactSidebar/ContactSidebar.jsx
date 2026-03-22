import { useReveal } from '../../../../hooks/useReveal';
import './ContactSidebar.css';

export default function ContactSidebar() {
  const [responseRef, responseVisible] = useReveal();
  const [infoRef, infoVisible] = useReveal();

  return (
    <div className="contact-sidebar">
      <div ref={responseRef} className={`response-card reveal reveal-delay-2${responseVisible ? ' visible' : ''}`}>
        <div className="response-card-label">Response Times</div>
        <h3><em>1–2</em> business days</h3>
        <p>We aim to respond to all enquiries promptly. Most messages receive a reply within one to two working days.</p>
        <div className="response-indicator">
          <div className="response-dot-group">
            <div className="response-dot"></div>
            <div className="response-dot"></div>
            <div className="response-dot"></div>
          </div>
          <span>Typically replies within hours</span>
        </div>
      </div>

      <div ref={infoRef} className={`info-card reveal reveal-delay-3${infoVisible ? ' visible' : ''}`}>
        <h4>Before you reach out</h4>
        <p>You may find your answer in our resources:</p>
        <div className="info-items">
          <div className="info-item">
            <div className="info-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div className="info-item-text">
              <h5>FAQ</h5>
              <p>Common questions about membership, payments, and the platform.</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="info-item-text">
              <h5>Trust &amp; Safety</h5>
              <p>Learn how our vetting process protects every member.</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><path d="M1 10h22"/></svg>
            </div>
            <div className="info-item-text">
              <h5>Payment Options</h5>
              <p>Bank, card, cash, crypto, and loyalty credits — all explained.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
