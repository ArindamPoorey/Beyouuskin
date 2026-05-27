import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

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
  // replace with your actual domain once deployed
  metadataBase: new URL('https://beyouuskincare.com'),

  title: {
    default: 'Be Youu-SkinCare | Natural Skincare Made Simple',
    template: '%s | Be Youu-SkinCare',   // other pages get " About | Be Youu-SkinCare"
  },
  description: 'Discover our curated collection of natural, effective skincare designed to reveal your healthiest glow. Pure ingredients, no harsh chemicals.',
  keywords: ['natural skincare', 'organic skincare india', 'face wash', 'body butter', 'hair oil', 'Be Youu SkinCare', 'skincare vadodara'],

  // Open Graph — controls WhatsApp / Facebook link previews
  openGraph: {
    title: 'Be Youu-SkinCare | Natural Skincare Made Simple',
    description: 'Pure ingredients, no harsh chemicals. Natural skincare made simple.',
    url: 'https://beyouuskincare.com',
    siteName: 'Be Youu-SkinCare',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Be Youu-SkinCare' }],
    locale: 'en_IN',
    type: 'website',
  },

  // robots — tell Google to index everything
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}