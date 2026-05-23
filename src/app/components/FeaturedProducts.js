import Link from 'next/link';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(4);

  return (
    <section className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 36,
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div>
            <h2 className="section-title">Featured Favorites</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 6 }}>
              Our most loved natural formulations.
            </p>
          </div>
          <Link href="/products" style={{
            fontSize: 13,
            color: 'var(--terracotta)',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontWeight: 500,
          }}>
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }} className="featured-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}