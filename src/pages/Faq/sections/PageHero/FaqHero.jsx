import './FaqHero.css';

export default function FaqHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid"></div>
      <div className="page-hero-inner">
        <div className="page-hero-badge">
          <span className="page-hero-badge-dot"></span>
          Help Centre
        </div>
        <h1>Frequently Asked <em>Questions</em></h1>
        <p className="page-hero-sub">Everything you need to know about MerchMarket, membership, and how the platform works.</p>
      </div>
    </section>
  );
}
