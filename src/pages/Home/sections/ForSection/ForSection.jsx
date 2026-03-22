import { useReveal } from '../../../../hooks/useReveal';
import SectionLabel from '../../../../components/ui/SectionLabel';
import { forTagsData } from '../../../../data/forTagsData';
import './ForSection.css';

export default function ForSection() {
  const [textRef, textVisible] = useReveal();
  const [tagsRef, tagsVisible] = useReveal();

  return (
    <section className="for-section" id="for">
      <div className="section-inner">
        <div className="for-layout">
          <div ref={textRef} className={`for-text reveal${textVisible ? ' visible' : ''}`}>
            <SectionLabel>Who It's For</SectionLabel>
            <h2 className="section-title">If your business buys or sells — <em>you belong here</em></h2>
            <p className="section-desc">MerchMarket is built for businesses that take procurement and trade relationships seriously. From SMEs to enterprise teams.</p>
            <p className="for-tagline">"The marketplace that treats business like business."</p>
          </div>
          <div ref={tagsRef} className={`for-tags reveal reveal-delay-2${tagsVisible ? ' visible' : ''}`}>
            {forTagsData.map((tag, index) => (
              <span key={index} className="for-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
