import ContactHero from './sections/PageHero/ContactHero';
import ContactCards from './sections/ContactCards/ContactCards';
import ContactSidebar from './sections/ContactSidebar/ContactSidebar';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="contact-section">
        <div className="contact-inner">
          <ContactCards />
          <ContactSidebar />
        </div>
      </section>
    </>
  );
}
