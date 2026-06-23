import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F2] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-light text-center mb-4">
          Our Collection
        </h1>

        <p className="text-center text-gray-500 mb-16">
          Curated heels and handbags for timeless elegance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h2 className="font-medium text-lg">
                  {product.name}
                </h2>

                <p className="text-[#C08A5D] mt-2">
                  {product.price}
                </p>

                <p className="text-sm text-gray-500 mt-2 capitalize">
                  {product.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}