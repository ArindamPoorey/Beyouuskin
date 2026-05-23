'use client';

export default function ContactSection({ variant = 'cta' }) {

  if (variant === 'cta') {
    return (
      <section className="section" style={{ background: 'var(--warm-bg)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 12 }}>Ready to Refresh Your Routine?</h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 32 }}>
            Reach out to us directly for personalized recommendations or to place an order.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 36 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>📞</span>
              <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>+91 9359558578</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>✉️</span>
              <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>kinjalorganics5@gmail.com</span>
            </div>
          </div>
          <a
            href="https://wa.me/919359558578"
            target="_blank"
            rel="noreferrer"
            className="btn-primary cta-wa-btn"
            style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}
          >
            🛒 Order via WhatsApp
          </a>
        </div>

        <style>{`
          .cta-wa-btn {
            transition: transform 0.2s ease, box-shadow 0.2s ease !important;
          }
          .cta-wa-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(139,58,42,0.25) !important;
          }
          .cta-wa-btn:active {
            transform: translateY(0px);
          }
        `}</style>
      </section>
    );
  }

  const contacts = [
    { icon: '💬', label: 'WhatsApp', value: '+91 9359558578', href: 'https://wa.me/919359558578', color: '#25D366' },
    { icon: '📞', label: 'Phone',     value: '+91 9359558578', href: 'tel:+919359558578',         color: 'var(--terracotta)' },
    { icon: '✉️', label: 'Email',     value: 'kinjalorganics5@gmail.com', href: 'mailto:kinjalorganics5@gmail.com', color: '#4A90D9' },
  ];

  return (
    <section className="section" style={{ background: 'var(--cream-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: 12 }}>Let's Connect</h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 40 }}>
            Questions about products or an order? Send us a message and we'll get back to you.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
            {contacts.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                className="contact-card"
                style={{ '--accent': color }}
              >
                <div className="contact-icon">{icon}</div>
                <div style={{ textAlign: 'left' }}>
                  <p className="contact-label">{label}</p>
                  <p className="contact-value">{value}</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 16px 20px;
          width: 100%;
          max-width: 400px;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: var(--accent);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.25s ease;
          border-radius: 0 2px 2px 0;
        }
        .contact-card:hover {
          transform: translateY(-4px) translateX(2px);
          box-shadow: 0 12px 32px rgba(60,35,20,0.12);
          border-color: var(--accent);
        }
        .contact-card:hover::before {
          transform: scaleY(1);
        }
        .contact-card:active {
          transform: translateY(-1px);
        }
        .contact-icon {
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          border-radius: var(--radius-md);
          background: var(--sand-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .contact-card:hover .contact-icon {
          transform: scale(1.12) rotate(-5deg);
          background: var(--cream-dark);
        }
        .contact-label {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0;
        }
        .contact-value {
          font-size: 14px;
          color: var(--text-primary);
          margin: 3px 0 0;
          transition: color 0.2s;
        }
        .contact-card:hover .contact-value {
          color: var(--accent);
        }
        .contact-arrow {
          margin-left: auto;
          font-size: 18px;
          color: var(--text-muted);
          transition: transform 0.25s ease, color 0.25s ease;
          flex-shrink: 0;
        }
        .contact-card:hover .contact-arrow {
          transform: translateX(5px);
          color: var(--accent);
        }

        @media (max-width: 480px) {
          .contact-card { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}