import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F2] px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-xs text-[#C08A5D]">
          Collection
        </p>

        <h1 className="text-5xl md:text-6xl font-light mt-4">
          Luxury Collection
        </h1>

        <p className="mt-6 text-gray-500 max-w-2xl">
          Discover our curated selection of premium heels and handbags
          designed to elevate confidence, elegance, and personal style.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}