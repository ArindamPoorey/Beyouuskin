'use client';
import { useState } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

const WHATSAPP_NUMBER = '919359558578';

export default function ProductDetails({ product, related }) {
  const [qty, setQty] = useState(1);
  const totalPrice = product.price * qty;

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in buying the *${product.name}* from Be Youu-SkinCare.\n\n` +
    `📦 Product: ${product.name}\n` +
    `🔢 Quantity: ${qty}\n` +
    `💰 Total: ₹${totalPrice}\n\n` +
    `Please let me know the delivery details. Thank you!`
  );

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div style={{ background: 'var(--cream)', minHeight: '80vh' }}>
      <div className="container" style={{ paddingTop: 32, paddingBottom: 80 }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-muted)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
          <span>›</span>
          <Link href="/products" style={{ color: 'var(--text-muted)' }}>Products</Link>
          <span>›</span>
          <span style={{ color: 'var(--text-primary)' }}>{product.name}</span>
        </div>

        {/* Main layout */}
        <div className="pd-grid">

          {/* Image */}
          <div style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            aspectRatio: '1/1',
            background: 'var(--sand-light)',
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Info */}
          <div>
            <span className="badge" style={{ marginBottom: 14, display: 'inline-block' }}>{product.badge}</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: 10,
            }}>{product.name}</h1>

            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'var(--terracotta)',
              fontWeight: 500,
              marginBottom: 18,
            }}>₹ {totalPrice}.00</p>

            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24 }}>
              {product.description}
            </p>

            {/* Benefits */}
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: 10 }}>
                Key Benefits
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {product.benefits.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--terracotta)' }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: 8 }}>
                Ingredients
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{product.ingredients}</p>
            </div>

            {/* Quantity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)' }}>Qty:</p>
              <div style={{
                display: 'flex', alignItems: 'center',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius-full)',
              }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{ width: 40, height: 42, background: 'none', fontSize: 20, color: 'var(--text-secondary)', cursor: 'pointer', border: 'none' }}>−</button>
                <span style={{ width: 32, textAlign: 'center', fontSize: 15, fontWeight: 600 }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}
                  style={{ width: 40, height: 42, background: 'none', fontSize: 20, color: 'var(--text-secondary)', cursor: 'pointer', border: 'none' }}>+</button>
              </div>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{product.size}</span>
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noreferrer"
              className="wa-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp — ₹{totalPrice}
            </a>

            <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 10 }}>
              We'll confirm your order and delivery on WhatsApp
            </p>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ marginTop: 72 }}>
            <h2 className="section-title" style={{ marginBottom: 28, textAlign: 'center' }}>You Might Also Love</h2>
            <div className="related-grid">
              {related.map(p => <ProductCard key={p.id} product={p} compact />)}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .pd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .wa-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 15px 24px;
          border-radius: var(--radius-full);
          background: #25D366;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-body);
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(37,211,102,0.3);
          transition: background 0.2s, transform 0.2s;
        }
        .wa-btn:hover {
          background: #1ebe5d;
          transform: translateY(-2px);
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .pd-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .related-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .related-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}