import { useReveal } from '../../../../hooks/useReveal';
import SectionLabel from '../../../../components/ui/SectionLabel';
import { trustData } from '../../../../data/trustData';
import './TrustSection.css';

export default function TrustSection() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section className="trust-section" id="trust">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header section-header-center reveal${headerVisible ? ' visible' : ''}`}>
          <SectionLabel>Built for Trust</SectionLabel>
          <h2 className="section-title">Trust is the <em>foundation</em></h2>
          <p className="section-desc">This is not an open public listing site. Every business on the platform operates within a controlled, professional marketplace environment.</p>
        </div>
        <div className="trust-grid">
          {trustData.map((card, index) => (
            <TrustCard key={index} card={card} delay={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustCard({ card, delay }) {
  const [ref, isVisible] = useReveal();

  return (
    <div ref={ref} className={`trust-card reveal reveal-delay-${delay}${isVisible ? ' visible' : ''}`}>
      <div className="trust-card-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
}
