import { products } from './data/products';
 
export default function sitemap() {
  const base = 'https://beyouuskincare.com';
 
  // static pages
  const staticPages = [
    { url: base,             lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/about`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
 
  // dynamic product pages
  const productPages = products.map(p => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
 
  return [...staticPages, ...productPages];
}
 