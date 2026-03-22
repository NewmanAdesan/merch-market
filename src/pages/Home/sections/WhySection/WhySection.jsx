import { useReveal } from '../../../../hooks/useReveal';
import SectionLabel from '../../../../components/ui/SectionLabel';
import { whyData } from '../../../../data/whyData';
import './WhySection.css';

export default function WhySection() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section className="why-section" id="why">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header section-header-center reveal${headerVisible ? ' visible' : ''}`}>
          <SectionLabel>Why MerchMarket</SectionLabel>
          <h2 className="section-title">A marketplace designed for <em>quality</em>, not quantity</h2>
          <p className="section-desc">Unlike open marketplaces, MerchMarket is a private, vetted business-only network designed to create safer, higher-quality trade relationships.</p>
        </div>
        <div className="why-grid">
          {whyData.map((card, index) => (
            <WhyCard key={index} card={card} delay={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ card, delay }) {
  const [ref, isVisible] = useReveal();

  return (
    <div ref={ref} className={`why-card reveal reveal-delay-${delay}${isVisible ? ' visible' : ''}`}>
      <div className="why-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
}
