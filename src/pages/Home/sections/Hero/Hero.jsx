import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Application-Only Access
        </div>
        <h1>The Private B2B Marketplace Built for <em>Serious</em> Businesses</h1>
        <p className="hero-sub">MerchMarket connects verified buyers and trusted sellers across the UK and EU in one secure, application-only business marketplace for sourcing products and services across every sector.</p>
        <div className="hero-ctas">
          <a href="#" className="btn btn-primary btn-primary-lg">
            Apply for Access
            <svg style={{marginLeft:'8px'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#" className="btn btn-outline">Browse Marketplace</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <h3>UK &amp; EU</h3>
            <p>Coverage</p>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <h3>Vetted</h3>
            <p>Members Only</p>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <h3>5+</h3>
            <p>Payment Methods</p>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <h3>Every</h3>
            <p>Transaction Invoiced</p>
          </div>
        </div>
      </div>
    </section>
  );
}
