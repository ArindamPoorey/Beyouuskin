import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetails from '../../components/ProductDetails';
import { getProductBySlug, getRelatedProducts, products } from '../../data/products';

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

// Per-product SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,   // becomes "Tea Tree Face Wash | Be Youu-SkinCare"
    description: product.description,
    keywords: [product.name, product.category, product.badge, 'natural skincare india'],
    openGraph: {
      title: `${product.name} | Be Youu-SkinCare`,
      description: product.shortDesc,
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 4);

  // JSON-LD structured data — Google shows rich results (price, name etc.)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { '@type': 'Brand', name: 'Be Youu-SkinCare' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Be Youu-SkinCare' },
    },
  };

  return (
    <>
      {/* inject structured data into <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <ProductDetails product={product} related={related} />
      </main>
      <Footer />
    </>
  );
}