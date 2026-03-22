import FaqHero from './sections/PageHero/FaqHero';
import FaqAccordion from './sections/FaqAccordion/FaqAccordion';
import FaqCta from './sections/FaqCta/FaqCta';
import './FaqPage.css';

export default function FaqPage() {
  return (
    <div className="faq-page">
      <FaqHero />
      <section className="faq-section">
        <FaqAccordion />
        <FaqCta />
      </section>
    </div>
  );
}
