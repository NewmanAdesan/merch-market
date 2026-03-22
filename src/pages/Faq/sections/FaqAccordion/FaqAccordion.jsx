import { useState } from 'react';
import { useReveal } from '../../../../hooks/useReveal';
import FaqItem from './FaqItem';
import { faqData } from '../../../../data/faqData';
import './FaqAccordion.css';

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-inner">
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          item={item}
          index={index}
          isActive={activeIndex === index}
          onToggle={handleToggle}
          delay={index}
        />
      ))}
    </div>
  );
}
