import Link from 'next/link';

const categories = [
  { name: 'Soaps',       image: '/Charcoal Soap.jpeg' },
  { name: 'Face Wash',   image: '/facewashcate.jpeg' },
  { name: 'Body Butter', image: '/bodybutterc.jpeg' },
  { name: 'Body Lotion', image: '/bodylotionc.jpeg' },
  { name: 'Hair Care',    image: '/hairoilc.jpeg' },
];

export default function CategorySection() {
  return (
    <section className="section" style={{ background: 'var(--warm-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle" style={{ marginTop: 10 }}>
            Discover our range of targeted solutions for every step of your routine.
          </p>
        </div>

        <div className="cat-grid">
          <CategoryCard cat={categories[0]} extraClass="cat-wide" height={220} />
          <CategoryCard cat={categories[1]} extraClass="cat-wide" height={220} />
          <CategoryCard cat={categories[2]} height={180} />
          <CategoryCard cat={categories[3]} height={180} />
          <CategoryCard cat={categories[4]} height={180} />
        </div>
      </div>

      <style>{`
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .cat-wide { grid-column: span 2; }

        .cat-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: block;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(60,35,20,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .cat-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 16px 40px rgba(60,35,20,0.18);
        }
        .cat-card:active {
          transform: translateY(-2px) scale(1.005);
        }
        .cat-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .cat-card:hover .cat-img {
          transform: scale(1.08);
        }
        .cat-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 55%);
          transition: background 0.35s ease;
        }
        .cat-card:hover .cat-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 55%);
        }
        .cat-label {
          position: absolute;
          bottom: 16px; left: 16px;
        }
        .cat-label p {
          color: #fff;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 400;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
          margin: 0;
          transition: transform 0.3s ease;
        }
        .cat-card:hover .cat-label p {
          transform: translateY(-4px);
        }
        .cat-explore {
          display: inline-block;
          margin-top: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(6px);
          border-radius: var(--radius-full);
          padding: 3px 12px;
          letter-spacing: 0.05em;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
        }
        .cat-card:hover .cat-explore {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 900px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cat-wide  { grid-column: span 1 !important; }
        }
        @media (max-width: 480px) {
          .cat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function CategoryCard({ cat, extraClass = '', height = 200 }) {
  return (
    <Link
      href={`/products?category=${cat.name}`}
      className={`cat-card ${extraClass}`}
      style={{ height }}
    >
      <img src={cat.image} alt={cat.name} className="cat-img" />
      <div className="cat-overlay" />
      <div className="cat-label">
        <p>{cat.name}</p>
        <span className="cat-explore">Explore →</span>
      </div>
    </Link>
  );
}