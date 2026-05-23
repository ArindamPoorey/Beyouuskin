import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar.js';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Be Youu-SkinCare | Natural Skincare Made Simple',
  description:
    'Discover our curated collection of natural, effective skincare designed to reveal your healthiest glow. Pure ingredients for approachable luxury.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Navbar /> {/* 👈 add this */}
        {children}
      </body>
    </html>
  );
}