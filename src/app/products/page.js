'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function ProductsPage() {
  const [active, setActive]       = useState('All');
  const [filtered, setFiltered]   = useState(products);
  const [animating, setAnimating] = useState(false);
  const gridRef = useRef(null);

  const selectCategory = (cat) => {
    if (cat === active || animating) return;

    // 1. fade + slide out
    setAnimating(true);

    setTimeout(() => {
      // 2. swap data while invisible
      setActive(cat);
      setFiltered(cat === 'All' ? products : products.filter(p => p.category === cat));

      // 3. fade + slide back in
      setTimeout(() => setAnimating(false), 50);
    }, 220);
  };

  return (
    <>
      <style>{`
        /* filter bar */
        .filter-bar {
          display: flex; flex-direction: row;
          gap: 8px; overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 4px;
          scrollbar-width: none;
        }
        .filter-bar::-webkit-scrollbar { display: none; }

        .f-btn {
          flex-shrink: 0;
          padding: 9px 22px;
          border-radius: 9999px;
          border: 1.5px solid var(--border);
          background: #fff;
          color: var(--text-secondary);
          font-size: 13px; font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          white-space: nowrap;
          -webkit-tap-highlight-color: transparent;
          transition: background 0.2s ease,
                      border-color 0.2s ease,
                      color 0.2s ease,
                      transform 0.15s ease,
                      box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .f-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.3);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .f-btn:hover::after { transform: translateX(100%); }
        .f-btn:hover {
          border-color: var(--terracotta);
          color: var(--terracotta);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139,58,42,0.12);
        }
        .f-btn:active { transform: translateY(0px) scale(0.97); }
        .f-btn.active {
          background: var(--terracotta);
          border-color: var(--terracotta);
          color: #fff;
          box-shadow: 0 4px 16px rgba(139,58,42,0.3);
          transform: translateY(-2px);
        }
        .f-btn.active:hover { transform: translateY(-3px); }

        /* count badge on active btn */
        .f-count {
          display: inline-flex;
          align-items: center; justify-content: center;
          margin-left: 6px;
          width: 18px; height: 18px;
          background: rgba(255,255,255,0.25);
          border-radius: 50%;
          font-size: 10px; font-weight: 700;
          vertical-align: middle;
        }

        /* product grid */
        .products-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .products-grid.out {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
        }
        .products-grid.in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* staggered card entrance */
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .products-grid.in .pcard {
          animation: cardIn 0.35s cubic-bezier(0.4,0,0.2,1) both;
        }
        .products-grid.in .pcard:nth-child(1)  { animation-delay: 0.00s; }
        .products-grid.in .pcard:nth-child(2)  { animation-delay: 0.04s; }
        .products-grid.in .pcard:nth-child(3)  { animation-delay: 0.08s; }
        .products-grid.in .pcard:nth-child(4)  { animation-delay: 0.12s; }
        .products-grid.in .pcard:nth-child(5)  { animation-delay: 0.16s; }
        .products-grid.in .pcard:nth-child(6)  { animation-delay: 0.20s; }
        .products-grid.in .pcard:nth-child(7)  { animation-delay: 0.24s; }
        .products-grid.in .pcard:nth-child(8)  { animation-delay: 0.28s; }
        .products-grid.in .pcard:nth-child(9)  { animation-delay: 0.32s; }
        .products-grid.in .pcard:nth-child(10) { animation-delay: 0.36s; }

        /* empty state */
        @keyframes emptyIn {
          from { opacity:0; transform: translateY(16px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .empty-state { animation: emptyIn 0.4s ease both; }

        @media (min-width: 769px) {
          .products-grid { grid-template-columns: repeat(3,1fr); gap: 24px; }
        }
        @media (max-width: 360px) {
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />
      <main>

        {/* Header */}
        <section style={{ background: 'var(--cream)', textAlign: 'center', padding: '48px 0 28px' }}>
          <div className="container">
            <h1 className="section-title" style={{ marginBottom: 10 }}>Our Products</h1>
            <p className="section-subtitle">
              Natural, effective skincare designed to reveal your healthiest glow.
            </p>
          </div>
        </section>

        {/* Filter */}
        <div style={{ background: 'var(--cream)', paddingBottom: 24 }}>
          <div className="container">
            <div className="filter-bar">
              {categories.map(cat => {
                const count = cat === 'All' ? products.length : products.filter(p => p.category === cat).length;
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`f-btn${isActive ? ' active' : ''}`}
                    onClick={() => selectCategory(cat)}
                    onTouchEnd={e => { e.preventDefault(); selectCategory(cat); }}
                  >
                    {cat}
                    {isActive && <span className="f-count">{count}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid */}
        <section style={{ background: 'var(--warm-bg)', padding: '28px 0 80px' }}>
          <div className="container">
            {filtered.length === 0 ? (
              <div className="empty-state" style={{ textAlign: 'center', padding: '80px 0' }}>
                <p style={{ fontSize: 40, marginBottom: 12 }}>🌿</p>
                <p style={{ fontSize: 16, color: 'var(--text-muted)' }}>No products in this category yet.</p>
              </div>
            ) : (
              <div
                ref={gridRef}
                className={`products-grid ${animating ? 'out' : 'in'}`}
              >
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}