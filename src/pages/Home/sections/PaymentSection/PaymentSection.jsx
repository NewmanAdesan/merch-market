import { useReveal } from '../../../../hooks/useReveal';
import SectionLabel from '../../../../components/ui/SectionLabel';
import { paymentData } from '../../../../data/paymentData';
import './PaymentSection.css';

export default function PaymentSection() {
  const [textRef, textVisible] = useReveal();
  const [cardsRef, cardsVisible] = useReveal();

  return (
    <section className="payment-section" id="payments">
      <div className="section-inner">
        <div className="payment-layout">
          <div ref={textRef} className={`reveal${textVisible ? ' visible' : ''}`}>
            <SectionLabel>Flexible Payments</SectionLabel>
            <h2 className="section-title">Pay the way your <em>business</em> works</h2>
            <p className="section-desc" style={{marginBottom: 0}}>MerchMarket supports multiple payment methods to suit modern businesses. This flexibility makes procurement faster and easier across industries and borders.</p>
          </div>
          <div ref={cardsRef} className={`payment-methods reveal reveal-delay-2${cardsVisible ? ' visible' : ''}`}>
            {paymentData.map((card, index) => (
              card.featured ? (
                <div key={index} className="payment-card featured">
                  <div className="payment-card-icon">{card.icon}</div>
                  <div className="payment-featured-text">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              ) : (
                <div key={index} className="payment-card">
                  <div className="payment-card-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
