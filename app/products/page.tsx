import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#1C1C1C]">
      
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
          
          <h1 className="text-lg tracking-[0.45em] font-light">
            LUMÉE
          </h1>

          <Link
            href="/"
            className="text-xs tracking-[0.2em] uppercase text-gray-600 hover:text-black transition"
          >
            Home
          </Link>

        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight">
            Our Collection
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Curated heels and handbags designed for timeless elegance and modern confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-white/70 backdrop-blur-md border border-black/5 rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
            >
              
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h2 className="text-gray-900 font-medium text-lg">
                  {product.name}
                </h2>

                <p className="mt-2 text-[#A67C3D] font-medium">
                  {product.price}
                </p>

                <p className="mt-1 text-sm text-gray-500 capitalize">
                  {product.category}
                </p>
              </div>

            </Link>
          ))}

        </div>
      </section>
    </main>
  );
}