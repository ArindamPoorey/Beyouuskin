import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--cream)',
      borderTop: '1px solid var(--border)',
      padding: '32px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            color: 'var(--terracotta)',
            fontWeight: 500,
            marginBottom: 4,
          }}>
            Be Youu-SkinCare
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            © 2026 Be Youu-SkinCare. Natural Skincare Made Simple.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          
        </div>
      </div>

      <style>{`
        .footer-link {
          font-size: 13px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--terracotta);
        }
      `}</style>
    </footer>
  );
}