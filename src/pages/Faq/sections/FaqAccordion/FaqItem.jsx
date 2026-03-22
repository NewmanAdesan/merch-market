import { useRef, useEffect, useState } from 'react';
import { useReveal } from '../../../../hooks/useReveal';

export default function FaqItem({ item, index, isActive, onToggle, delay }) {
  const [ref, isVisible] = useReveal();
  const answerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (isActive && answerRef.current) {
      setMaxHeight(answerRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isActive]);

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : '';

  if (item.comingSoon) {
    return (
      <div ref={ref} className={`faq-item coming-soon reveal${delayClass}${isVisible ? ' visible' : ''}`}>
        <button className="faq-question" aria-expanded="false" disabled>
          <h3>{item.question}</h3>
          <span className="faq-coming-badge">Coming Soon</span>
        </button>
      </div>
    );
  }

  return (
    <div ref={ref} className={`faq-item${isActive ? ' active' : ''} reveal${delayClass}${isVisible ? ' visible' : ''}`} data-faq>
      <button
        className="faq-question"
        aria-expanded={isActive ? 'true' : 'false'}
        onClick={() => onToggle(index)}
      >
        <h3>{item.question}</h3>
        <div className="faq-question-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"/><path d="M5 12h14"/>
          </svg>
        </div>
      </button>
      <div className="faq-answer" ref={answerRef} style={{ maxHeight: `${maxHeight}px` }}>
        <div className="faq-answer-inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
