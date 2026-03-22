import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import WhySection from './sections/WhySection/WhySection';
import SectorsSection from './sections/SectorsSection/SectorsSection';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import PaymentSection from './sections/PaymentSection/PaymentSection';
import TrustSection from './sections/TrustSection/TrustSection';
import ForSection from './sections/ForSection/ForSection';
import CtaSection from './sections/CtaSection/CtaSection';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <WhySection />
      <SectorsSection />
      <HowItWorks />
      <PaymentSection />
      <TrustSection />
      <ForSection />
      <CtaSection />
    </>
  );
}
