import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetails from '../../components/ProductDetails';
import { getProductBySlug, getRelatedProducts, products } from '../../data/products';

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Be Youu-SkinCare`,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(slug, 4);

  return (
    <>
      <Navbar />
      <main>
        <ProductDetails product={product} related={related} />
      </main>
      <Footer />
    </>
  );
}