import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export const metadata = {
  title: 'About — Be Youu-SkinCare',
  description: 'Rooted in Nature, Formulated for You. Learn about our organic skincare philosophy.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{
          background: 'var(--cream)',
          padding: '64px 0 56px',
          textAlign: 'center',
        }}>
          <div className="container">
            <span className="badge" style={{ marginBottom: 16 }}>Our Story</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: 20,
            }}>
              Rooted in <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Nature</em>,<br />
              Formulated for You.
            </h1>
            <p className="section-subtitle">
              We started with a simple idea: skincare should feel easy and honest. By using carefully selected botanical ingredients, we create products that fit naturally into your daily routine.
            </p>
          </div>
        </section>

        {/* Big image */}
        <section style={{ background: 'var(--cream)', paddingBottom: 80 }}>
          <div className="container">
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              height: 400,
            }}>
              <img
                src="https://images.unsplash.com/photo-1590422749897-47036da0b0ff?w=1200&q=80"
                alt="Natural skincare ingredients with botanicals"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section" style={{ background: 'var(--warm-bg)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>The Be Youu Philosophy</h2>
            <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: 48 }}>
              Transparency, purity, and craftsmanship in every drop.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
            }} className="philosophy-cards">
              {/* Large card — left */}
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                height: 380,
                background: 'var(--sand)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80"
                  alt="Artisanal process"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
                }} />
                <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                  <p style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400 }}>Artisanal Process</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 4 }}>Hand-blended in small batches to ensure maximum potency and freshness.</p>
                </div>
              </div>

              {/* Right column — 2 cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{
                  background: 'var(--sand-light)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 28,
                  flex: 1,
                }}>
                  <span style={{ fontSize: 28 }}>🌿</span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    marginTop: 12,
                    marginBottom: 8,
                  }}>Pure Ingredients</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Sourced sustainably, we only use what your skin truly needs. No fillers.
                  </p>
                </div>
                <div style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  height: 160,
                  background: 'var(--sand)',
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=600&q=80"
                    alt="Natural ingredients"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3 pillars */}
          <div className="container" style={{ marginTop: 60 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
              textAlign: 'center',
            }} className="pillars-grid">
              {[
                { icon: '🧪', title: 'Chemical Free', desc: 'No harsh synthetics' },
                { icon: '💧', title: 'Sulfate Free', desc: 'Gentle cleansing' },
                { icon: '🌱', title: 'Herbal Based', desc: 'Plant-powered results' },
              ].map(({ icon, title, desc }) => (
                <div key={title}>
                  <div style={{
                    width: 56, height: 56,
                    borderRadius: '50%',
                    background: 'var(--sand-light)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24,
                    margin: '0 auto 14px',
                  }}>{icon}</div>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: 4 }}>{title}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <ContactSection variant="form" />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .philosophy-cards {
            grid-template-columns: 1fr !important;
          }
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </>
  );
}