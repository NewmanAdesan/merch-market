import { useReveal } from '../../../../hooks/useReveal';
import SectionLabel from '../../../../components/ui/SectionLabel';
import { howStepsData } from '../../../../data/howStepsData';
import './HowItWorks.css';

export default function HowItWorks() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section className="how-section" id="how">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header section-header-center reveal${headerVisible ? ' visible' : ''}`}>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="section-title">From application to <em>trade</em> in four steps</h2>
          <p className="section-desc">A straightforward process designed to protect marketplace quality while getting approved businesses trading quickly.</p>
        </div>
        <div className="how-steps">
          {howStepsData.map((step, index) => (
            <HowStep key={index} step={step} delay={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowStep({ step, delay }) {
  const [ref, isVisible] = useReveal();

  return (
    <div ref={ref} className={`how-step reveal reveal-delay-${delay}${isVisible ? ' visible' : ''}`}>
      <div className="how-step-number">{step.number}</div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  );
}
