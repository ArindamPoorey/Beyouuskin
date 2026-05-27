'use client';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Link from 'next/link';

// scroll-triggered fade-up hook
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, direction = 'up' }) {
  const [ref, visible] = useInView();
  const transforms = {
    up:    'translateY(40px)',
    left:  'translateX(-40px)',
    right: 'translateX(40px)',
    scale: 'scale(0.92)',
  };
  return (
    <div ref={ref} style={{
      opacity:   visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [heroRef, heroVisible] = useInView(0.1);

  const pillars = [
    { icon: '🧪', title: 'Chemical Free', desc: 'No harsh synthetics or artificial preservatives — ever.' },
    { icon: '💧', title: 'Sulfate Free',  desc: 'Gentle cleansing that respects your skin barrier.' },
    { icon: '🌱', title: 'Herbal Based',  desc: 'Potent plant-powered extracts for visible results.' },
  ];

  const values = [
    { icon: '🌿', title: 'Pure Ingredients',   desc: 'Sourced sustainably, we only use what your skin truly needs. No fillers, no compromises.' },
    { icon: '🤲', title: 'Artisanal Process',   desc: 'Hand-blended in small batches to ensure maximum potency and freshness in every bottle.' },
    { icon: '♻️', title: 'Eco Conscious',       desc: 'Packaging designed with the planet in mind. We reduce, reuse, and rethink at every step.' },
  ];

  return (
    <>
      <style>{`
        /* ── hero ── */
        .about-hero {
          background: linear-gradient(160deg, var(--cream) 60%, var(--sand-light) 100%);
          padding: 72px 0 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .about-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,184,150,0.25), transparent);
          pointer-events: none;
        }
        .hero-badge-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(139,58,42,0.08);
          border: 1px solid rgba(139,58,42,0.2);
          color: var(--terracotta);
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 6px 16px; border-radius: 9999px;
          margin-bottom: 24px;
          animation: badgePop 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes badgePop {
          from { opacity:0; transform: scale(0.7); }
          to   { opacity:1; transform: scale(1); }
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 400; line-height: 1.08;
          color: var(--text-primary);
          margin-bottom: 20px;
          animation: titleSlide 0.8s cubic-bezier(0.4,0,0.2,1) 0.15s both;
        }
        @keyframes titleSlide {
          from { opacity:0; transform: translateY(30px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .hero-sub {
          font-size: 16px; color: var(--text-secondary);
          max-width: 520px; margin: 0 auto 36px;
          line-height: 1.75;
          animation: titleSlide 0.8s cubic-bezier(0.4,0,0.2,1) 0.28s both;
        }
        .hero-cta-row {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
          animation: titleSlide 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s both;
        }
        .about-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        }
        .about-btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 24px rgba(139,58,42,0.25) !important;
        }

        /* ── big image ── */
        .hero-img-wrap {
          position: relative; border-radius: var(--radius-xl);
          overflow: hidden; cursor: pointer;
          box-shadow: 0 16px 48px rgba(60,35,20,0.14);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .hero-img-wrap:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 32px 72px rgba(60,35,20,0.2);
        }
        .hero-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        .hero-img-wrap:hover img { transform: scale(1.06); }
        .img-sheen {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .hero-img-wrap:hover .img-sheen { opacity: 1; }

        /* ── stat row ── */
        .stat-row {
          display: flex; gap: 0;
          background: var(--white);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(60,35,20,0.08);
          margin: 48px 0 0;
        }
        .stat-item {
          flex: 1; padding: 28px 20px; text-align: center;
          border-right: 1px solid var(--border);
          transition: background 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: var(--cream); transform: translateY(-3px); }
        .stat-num {
          font-family: var(--font-display);
          font-size: 2.4rem; font-weight: 400;
          color: var(--terracotta); line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label { font-size: 12px; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; }

        /* ── philosophy grid ── */
        .phil-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 24px; margin-top: 0;
        }
        .phil-big-card {
          position: relative; border-radius: var(--radius-xl);
          overflow: hidden; cursor: pointer;
          grid-row: span 2;
          box-shadow: 0 8px 32px rgba(60,35,20,0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .phil-big-card:hover {
          transform: translateY(-6px) rotate(0.5deg);
          box-shadow: 0 20px 56px rgba(60,35,20,0.18);
        }
        .phil-big-card img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        .phil-big-card:hover img { transform: scale(1.06); }
        .phil-big-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
        }
        .phil-big-label {
          position: absolute; bottom: 24px; left: 24px; right: 24px;
        }
        .phil-big-label h3 {
          font-family: var(--font-display); font-size: 1.6rem;
          color: #fff; font-weight: 400; margin-bottom: 6px;
          transform: translateY(4px);
          transition: transform 0.3s ease;
        }
        .phil-big-card:hover .phil-big-label h3 { transform: translateY(-4px); }
        .phil-big-label p {
          font-size: 13px; color: rgba(255,255,255,0.8); line-height: 1.55;
          opacity: 0; transform: translateY(8px);
          transition: opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
        }
        .phil-big-card:hover .phil-big-label p { opacity: 1; transform: translateY(0); }

        .phil-small-card {
          background: var(--sand-light);
          border-radius: var(--radius-xl);
          padding: 28px;
          border: 1px solid var(--border);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          cursor: default;
          position: relative; overflow: hidden;
        }
        .phil-small-card::before {
          content: '';
          position: absolute; top: -40px; right: -40px;
          width: 120px; height: 120px;
          background: radial-gradient(circle, rgba(139,58,42,0.08), transparent 70%);
          transition: transform 0.4s ease;
        }
        .phil-small-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(60,35,20,0.12); background: var(--cream); }
        .phil-small-card:hover::before { transform: scale(1.5); }
        .phil-icon-wrap {
          width: 52px; height: 52px;
          background: var(--white);
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin-bottom: 14px;
          box-shadow: 0 2px 8px rgba(60,35,20,0.08);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .phil-small-card:hover .phil-icon-wrap { transform: rotate(-8deg) scale(1.15); }

        /* ── value cards ── */
        .value-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .value-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 32px 24px;
          text-align: center;
          position: relative; overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .value-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--terracotta), var(--sand));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .value-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(60,35,20,0.12); border-color: var(--sand); }
        .value-card:hover::after { transform: scaleX(1); }
        .value-emoji {
          font-size: 36px; display: block; margin-bottom: 14px;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .value-card:hover .value-emoji { transform: scale(1.25) rotate(-5deg); }

        /* ── pillars ── */
        .pillar-wrap { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .pillar {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: 28px 20px;
          background: var(--white);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .pillar:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(60,35,20,0.1); }
        .pillar-circle {
          width: 60px; height: 60px;
          background: var(--sand-light);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 14px;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease;
        }
        .pillar:hover .pillar-circle { transform: scale(1.15); background: var(--cream-dark); }

        /* responsive */
        @media (max-width: 768px) {
          .phil-grid { grid-template-columns: 1fr !important; }
          .phil-big-card { grid-row: span 1; height: 300px; }
          .value-grid { grid-template-columns: 1fr !important; }
          .pillar-wrap { grid-template-columns: 1fr !important; }
          .stat-row { flex-direction: column; }
          .stat-item { border-right: none; border-bottom: 1px solid var(--border); }
          .stat-item:last-child { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 2.4rem; }
        }
      `}</style>

      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-badge-pill">✦ Our Story</div>
            <h1 className="hero-title">
              Rooted in{' '}
              <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Nature</em>,<br />
              Formulated for You.
            </h1>
            <p className="hero-sub">
              We believe skincare should be an uncomplicated, luxurious ritual. By harnessing the pure power of botanical ingredients, we craft minimalist formulas that nurture your skin's natural balance.
            </p>
            <div className="hero-cta-row">
              <Link href="/products" className="btn-primary about-btn">Shop Now</Link>
              <Link href="/contact"  className="btn-outline about-btn">Get in Touch</Link>
            </div>
          </div>
        </section>

        {/* ── BIG IMAGE + STATS ── */}
        <section style={{ background: 'var(--cream)', padding: '64px 0' }}>
          <div className="container">
            <Reveal direction="scale">
              <div className="hero-img-wrap" style={{ height: 420 }}>
                <img
                  src="aboutsec.jpg"
                  alt="Natural skincare ingredients"
                />
                <div className="img-sheen" />
              </div>
            </Reveal>

            {/* stat row */}
            <Reveal delay={0.1}>
              <div className="stat-row">
                {[
                  { num: '100%', label: 'Natural Ingredients' },
                  { num: '10+',  label: 'Products' },
                  { num: '0',    label: 'Harsh Chemicals' },
                  { num: '♾️',   label: 'Love for Skin' },
                ].map(({ num, label }) => (
                  <div key={label} className="stat-item">
                    <div className="stat-num">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="section" style={{ background: 'var(--warm-bg)' }}>
          <div className="container">
<<<<<<< HEAD
<<<<<<< HEAD
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
                  src="/hero img.jpeg"
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
=======
=======
>>>>>>> 9c30552013d597a6a49b83a9559c2778a5b73666
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <p className="section-label">What We Stand For</p>
                <h2 className="section-title">The Be Youu Philosophy</h2>
                <p className="section-subtitle" style={{ marginTop: 10 }}>
                  Transparency, purity, and craftsmanship in every drop.
                </p>
<<<<<<< HEAD
>>>>>>> 9c30552 (Updated website)
=======
>>>>>>> 9c30552013d597a6a49b83a9559c2778a5b73666
              </div>
            </Reveal>

            <div className="phil-grid">
              {/* big card */}
              <Reveal direction="left">
                <div className="phil-big-card" style={{ minHeight: 400 }}>
                  <img
                    src="arti.jpg"
                    alt="Artisanal process"
                  />
                  <div className="phil-big-overlay" />
                  <div className="phil-big-label">
                    <h3>Artisanal Process</h3>
                    <p>Hand-blended in small batches to ensure maximum potency and freshness.</p>
                  </div>
                </div>
              </Reveal>

              {/* right column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <Reveal direction="right" delay={0.1}>
                  <div className="phil-small-card">
                    <div className="phil-icon-wrap">🌿</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, marginBottom: 8 }}>Pure Ingredients</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      Sourced sustainably, we only use what your skin truly needs. No fillers. No nonsense.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={0.2}>
                  <div className="phil-big-card" style={{ minHeight: 180 }}>
                    <img
                      src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=600&q=80"
                      alt="Natural ingredients"
                    />
                    <div className="img-sheen" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="section" style={{ background: 'var(--cream)' }}>
          <div className="container">
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <p className="section-label">Why Choose Us</p>
                <h2 className="section-title">Our Core Values</h2>
              </div>
            </Reveal>
            <div className="value-grid">
              {values.map(({ icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className="value-card">
                    <span className="value-emoji">{icon}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, marginBottom: 10 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PILLARS ── */}
        <section className="section" style={{ background: 'var(--warm-bg)' }}>
          <div className="container">
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <p className="section-label">Our Promise</p>
                <h2 className="section-title">Always Clean. Always Kind.</h2>
              </div>
            </Reveal>
            <div className="pillar-wrap">
              {pillars.map(({ icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 0.12}>
                  <div className="pillar">
                    <div className="pillar-circle">{icon}</div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: 8 }}>{title}</p>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactSection variant="form" />
      </main>
      <Footer />
    </>
  );
}
