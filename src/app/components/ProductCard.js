import Link from 'next/link';

export default function ProductCard({ product, compact = false }) {
  return (
    <>
      <Link href={`/products/${product.slug}`} className="pcard">
        {/* Image */}
        <div style={{
          position: 'relative',
          aspectRatio: '4/3',
          background: 'var(--sand-light)',
          overflow: 'hidden',
        }}>
          <img
            src={product.image}
            alt={product.name}
            className="pcard-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Badge */}
          <span style={{
            position: 'absolute', top: 10, left: 10,
            fontSize: 10, fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            background: 'rgba(250,246,241,0.92)',
            backdropFilter: 'blur(8px)',
            color: 'var(--brown-light)',
            padding: '3px 10px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border)',
          }}>{product.badge}</span>

          {/* Hover overlay */}
          <div className="pcard-overlay" />
        </div>

        {/* Content */}
        <div style={{ padding: compact ? '14px 14px 16px' : '18px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: compact ? '1rem' : '1.15rem',
            fontWeight: 500,
            color: 'var(--text-primary)',
            marginBottom: 6, lineHeight: 1.3,
          }}>{product.name}</h3>

          <p style={{
            fontSize: 13, color: 'var(--text-secondary)',
            lineHeight: 1.6, flex: 1, marginBottom: 14,
          }}>{product.size} — {product.shortDesc}</p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem', fontWeight: 500,
              color: 'var(--terracotta)',
            }}>₹{product.price}/-</span>

            <span className="pcard-viewbtn">View →</span>
          </div>
        </div>
      </Link>

      <style>{`
        .pcard {
          display: flex;
          flex-direction: column;
          background: var(--white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          text-decoration: none;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
        }
        .pcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(60,35,20,0.13);
          border-color: var(--sand);
        }
        .pcard:active {
          transform: translateY(-2px);
        }
        .pcard-img {
          transition: transform 0.5s ease;
        }
        .pcard:hover .pcard-img {
          transform: scale(1.07);
        }
        .pcard-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(139,58,42,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .pcard:hover .pcard-overlay {
          opacity: 1;
        }
        .pcard-viewbtn {
          font-size: 12px;
          color: var(--terracotta);
          background: var(--cream-dark);
          border-radius: var(--radius-full);
          padding: 4px 12px;
          font-weight: 500;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .pcard:hover .pcard-viewbtn {
          background: var(--terracotta);
          color: #fff;
          transform: translateX(3px);
        }
      `}</style>
    </>
  );
}