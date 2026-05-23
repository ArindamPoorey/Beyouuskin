'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible]   = useState(true);
  const [open, setOpen]         = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      // glass blur kicks in after 20px
      setScrolled(y > 20);
      // hide when scrolling DOWN past 80px, show when scrolling UP
      if (y < 80) {
        setVisible(true);
      } else if (y > lastY.current + 4) {
        setVisible(false); // scrolling down
      } else if (y < lastY.current - 4) {
        setVisible(true);  // scrolling up
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []); // empty deps — ref keeps it fresh

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <style>{`
        .nb {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          background: rgba(250,246,241,1);
          border-bottom: 1px solid transparent;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.3s ease,
                      box-shadow 0.3s ease,
                      background 0.3s ease;
          will-change: transform;
        }
        /* glass blur when scrolled */
        .nb.sc {
          background: rgba(250,246,241,0.85) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          backdrop-filter: blur(16px) !important;
          border-bottom-color: var(--border) !important;
          box-shadow: 0 2px 24px rgba(60,35,20,0.09) !important;
        }
        /* hide navbar */
        .nb.up { transform: translateY(-100%); }

        .nb-in {
          max-width: 1140px; margin: 0 auto; padding: 0 20px;
          height: 64px; display: flex; align-items: center;
          justify-content: space-between;
        }

        /* logo */
        .nb-logo {
          display: flex; align-items: center; gap: 8px;
          text-decoration: none; flex-shrink: 0;
          font-family: var(--font-display);
          font-size: 1.25rem; font-weight: 500;
          color: var(--terracotta);
          transition: opacity 0.2s, transform 0.2s;
        }
        .nb-logo:hover { opacity: 0.8; transform: scale(1.02); }

        /* desktop links */
        .nb-links { display: flex; list-style: none; gap: 4px; margin: 0; padding: 0; }
        .nb-link {
          position: relative;
          font-size: 14px; color: var(--text-secondary);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          transition: color 0.2s;
          overflow: hidden;
        }
        .nb-link::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--sand-light);
          border-radius: var(--radius-full);
          transform: scale(0); opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .nb-link:hover::before { transform: scale(1); opacity: 1; }
        .nb-link:hover { color: var(--terracotta); }
        .nb-link::after {
          content: '';
          position: absolute; bottom: 2px;
          left: 50%; right: 50%;
          height: 2px; background: var(--terracotta); border-radius: 2px;
          transition: left 0.25s ease, right 0.25s ease;
        }
        .nb-link.on::after { left: 14px; right: 14px; }
        .nb-link.on { color: var(--terracotta); font-weight: 500; }
        .nb-link span { position: relative; z-index: 1; }

        /* CTA */
        .nb-cta { font-size: 13px !important; padding: 9px 20px !important; }
        .nb-cta { transition: transform 0.2s ease, box-shadow 0.2s ease !important; }
        .nb-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(139,58,42,0.3) !important;
        }
        .nb-cta:active { transform: translateY(0) !important; }

        /* hamburger */
        .hbg {
          display: none;
          flex-direction: column; justify-content: center; align-items: center;
          gap: 5px; width: 44px; height: 44px;
          background: var(--terracotta); border: none; border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .hbg:hover { background: var(--terracotta-dark); transform: scale(1.05); }
        .hbg:active { transform: scale(0.95); }
        .hbg span {
          display: block; width: 22px; height: 2px;
          background: #fff; border-radius: 2px;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s, width 0.25s;
        }

        /* mobile drawer */
        .drawer {
          position: fixed; top: 64px; left: 0; right: 0;
          background: var(--cream); z-index: 9998;
          padding: 8px 20px 28px;
          border-bottom: 1px solid var(--border);
          box-shadow: 0 12px 40px rgba(60,35,20,0.12);
          transform: translateY(-110%); opacity: 0;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
          pointer-events: none;
        }
        .drawer.on { transform: translateY(0); opacity: 1; pointer-events: all; }

        .dr-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 4px;
          font-family: var(--font-display); font-size: 1.35rem; font-weight: 400;
          color: var(--text-primary); text-decoration: none;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s, padding-left 0.2s;
          -webkit-tap-highlight-color: transparent;
        }
        .dr-link:hover, .dr-link.on { color: var(--terracotta); padding-left: 8px; }
        .dr-arrow { font-size: 16px; opacity: 0; transform: translateX(-6px); transition: opacity 0.2s, transform 0.2s; }
        .dr-link:hover .dr-arrow, .dr-link.on .dr-arrow { opacity: 1; transform: translateX(0); }

        .overlay {
          display: none; position: fixed; inset: 0;
          background: rgba(0,0,0,0.4); z-index: 9997;
          -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
          animation: fadeIn 0.25s ease;
        }
        .overlay.on { display: block; }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

        @media (max-width: 768px) {
          #nb-links { display: none !important; }
          #nb-cta   { display: none !important; }
          .hbg      { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hbg    { display: none !important; }
          .drawer { display: none !important; }
          .overlay{ display: none !important; }
        }
      `}</style>

      <nav className={`nb${scrolled ? ' sc' : ''}${!visible ? ' up' : ''}`}>
        <div className="nb-in">

          <Link href="/" className="nb-logo">
            <Image src="/icon.png" alt="logo" width={70} height={70}
              style={{ objectFit:'contain', borderRadius:'50%' }} />
            Be Youu-SkinCare
          </Link>

          <ul className="nb-links" id="nb-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={`nb-link${pathname === href ? ' on' : ''}`}>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/products" className="btn-primary nb-cta" id="nb-cta">
            Order Now
          </Link>

          <button className="hbg" onClick={() => setOpen(o => !o)} aria-label="menu">
            <span style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ opacity: open ? 0 : 1, width: open ? '0px' : '22px' }} />
            <span style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`overlay${open ? ' on' : ''}`} onClick={() => setOpen(false)} />

      <div className={`drawer${open ? ' on' : ''}`}>
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href}
            className={`dr-link${pathname === href ? ' on' : ''}`}
            onClick={() => setOpen(false)}>
            {label}
            <span className="dr-arrow">→</span>
          </Link>
        ))}
        <Link href="/products" className="btn-primary"
          onClick={() => setOpen(false)}
          style={{ display:'flex', justifyContent:'center', marginTop: 20 }}>
          Order Now
        </Link>
      </div>

      <div style={{ height: 64 }} />
    </>
  );
}