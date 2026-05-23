import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import ContactSection from './components/ContactSection';

function OrganicPhilosophy() {
  return (
    <section className="section" style={{ background: 'var(--cream-dark)' }}>
      <div className="container">
        <div className="philosophy-grid">

          {/* Left text */}
          <div>
            <p className="section-label">Our Philosophy</p>
            <h2 className="section-title" style={{ marginBottom: 20 }}>Our Organic Philosophy</h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 32 }}>
              At Be Youu-SkinCare, we believe that true beauty stems from nature. Our formulations are crafted with intention, using only the purest, ethically sourced ingredients to nourish your skin without compromise.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '🌿', title: 'Chemical Free', desc: 'No harsh synthetics or artificial preservatives.' },
                { icon: '✨', title: 'Sulfate Free',  desc: 'Gentle cleansing that respects your skin barrier.' },
                { icon: '🌱', title: 'Herbal Based',  desc: 'Potent botanical extracts for visible results.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="phil-pill">
                  <span className="phil-icon">{icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{title}</p>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="phil-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1590422749897-47036da0b0ff?w=800&q=80"
              alt="Natural organic ingredients"
              className="phil-img"
            />
            <div className="phil-img-overlay" />
          </div>
        </div>
      </div>

      <style>{`
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .phil-pill {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .phil-pill:hover {
          background: var(--cream);
          border-color: var(--border);
          transform: translateX(6px);
        }
        .phil-icon {
          width: 38px; height: 38px; flex-shrink: 0;
          border-radius: var(--radius-md);
          background: var(--sand-light);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          transition: transform 0.3s ease;
        }
        .phil-pill:hover .phil-icon {
          transform: rotate(-8deg) scale(1.15);
        }
        .phil-img-wrap {
          border-radius: var(--radius-xl);
          overflow: hidden;
          aspect-ratio: 4/3;
          background: var(--sand-light);
          position: relative;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(60,35,20,0.10);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .phil-img-wrap:hover {
          transform: translateY(-6px) rotate(1deg);
          box-shadow: 0 24px 56px rgba(60,35,20,0.16);
        }
        .phil-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .phil-img-wrap:hover .phil-img {
          transform: scale(1.06) rotate(-1deg);
        }
        .phil-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(139,58,42,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .phil-img-wrap:hover .phil-img-overlay {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <OrganicPhilosophy />
        <ContactSection variant="cta" />
      </main>
      <Footer />
    </>
  );
}