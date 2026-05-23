import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ background: 'var(--cream)', padding: '60px 0 80px', overflow: 'hidden' }}>
      <div className="container">
        <div className="hero-grid">

          {/* Left content */}
          <div className="fade-up">
            <p className="section-label">Natural Skincare</p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: 400, lineHeight: 1.1,
              color: 'var(--text-primary)', marginBottom: 20,
            }}>
              Natural Skincare<br />Made Simple.
            </h1>
            <p style={{
              fontSize: 15, color: 'var(--text-secondary)',
              lineHeight: 1.75, marginBottom: 32, maxWidth: 420,
            }}>
            Made with ingredients your skin actually needs. Gentle, effective skincare designed to nourish, protect, and keep your routine simple.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/products" className="btn-primary hero-btn">Shop Now</Link>
              <Link href="/products" className="btn-outline hero-btn">Explore Products</Link>
            </div>
          </div>

          {/* Right image */}
          <div className="fade-up fade-up-2 hero-img-wrap">
            <Image
              src="/hero img.jpeg"
              alt="Natural skincare products"
              className="hero-img"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* floating badge */}
            <div className="hero-badge">
              <span style={{ fontSize: 20 }}>🌿</span>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>100% Natural</p>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: 0 }}>No harsh chemicals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .hero-img-wrap {
          border-radius: var(--radius-xl);
          overflow: hidden;
          aspect-ratio: 4/3;
          background: var(--sand-light);
          position: relative;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(60,35,20,0.10);
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }
        .hero-img-wrap:hover {
          box-shadow: 0 20px 56px rgba(60,35,20,0.18);
          transform: translateY(-6px);
        }
        .hero-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }
        .hero-img-wrap:hover .hero-img {
          transform: scale(1.05);
        }
        .hero-badge {
          position: absolute;
          bottom: 20px; left: 20px;
          background: rgba(250,246,241,0.95);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-lg);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 16px rgba(60,35,20,0.12);
          transform: translateY(8px);
          opacity: 0;
          transition: transform 0.4s ease 0.1s, opacity 0.4s ease 0.1s;
        }
        .hero-img-wrap:hover .hero-badge {
          transform: translateY(0);
          opacity: 1;
        }
        .hero-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        }
        .hero-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(139,58,42,0.2) !important;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-img-wrap {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}