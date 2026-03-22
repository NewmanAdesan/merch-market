import './ContactHero.css';

export default function ContactHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid"></div>
      <div className="page-hero-inner">
        <div className="page-hero-badge">
          <span className="page-hero-badge-dot"></span>
          Get In Touch
        </div>
        <h1>Contact <em>Us</em></h1>
        <p className="page-hero-sub">We're here to help businesses connect, trade, and grow through MerchMarket. Whether you're applying for membership, onboarding as a seller, or need support with transactions, our team is ready to assist.</p>
      </div>
    </section>
  );
}
