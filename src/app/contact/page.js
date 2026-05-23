import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export const metadata = {
  title: 'Contact — Be Youu-SkinCare',
  description: 'Get in touch with Be Youu-SkinCare for personalized skincare recommendations.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'var(--cream)', padding: '56px 0 40px', textAlign: 'center' }}>
          <div className="container">
            <p className="section-label">Get in Touch</p>
            <h1 className="section-title" style={{ marginBottom: 12 }}>We'd Love to Hear From You</h1>
            <p className="section-subtitle">
              Have a question about your routine or an order? Drop us a message and we'll get back to you.
            </p>
          </div>
        </section>
        <ContactSection variant="form" />
      </main>
      <Footer />
    </>
  );
}