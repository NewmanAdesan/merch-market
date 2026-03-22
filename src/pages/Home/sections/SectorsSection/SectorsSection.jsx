import { useReveal } from '../../../../hooks/useReveal';
import SectionLabel from '../../../../components/ui/SectionLabel';
import { sectorsData } from '../../../../data/sectorsData';
import './SectorsSection.css';

export default function SectorsSection() {
  const [textRef, textVisible] = useReveal();
  const [listRef, listVisible] = useReveal();

  return (
    <section className="sectors-section" id="sectors">
      <div className="section-inner">
        <div className="sectors-layout">
          <div ref={textRef} className={`sectors-text reveal${textVisible ? ' visible' : ''}`}>
            <SectionLabel>What You Can Buy &amp; Sell</SectionLabel>
            <h2 className="section-title">Every sector. <em>One</em> marketplace.</h2>
            <p className="section-desc">Whether you're sourcing suppliers or offering services, MerchMarket connects businesses efficiently and securely across all industries.</p>
          </div>
          <div ref={listRef} className={`sectors-list reveal reveal-delay-2${listVisible ? ' visible' : ''}`}>
            {sectorsData.map((sector, index) => (
              <div key={index} className="sector-tag">
                {sector.icon} {sector.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
