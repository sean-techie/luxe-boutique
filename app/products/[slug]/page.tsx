import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#1C1C1C]">
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12">
        
        <div className="relative h-[450px] rounded-[28px] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-light">{product.name}</h1>
          <p className="text-[#A67C3D] text-xl font-medium">
            {product.price}
          </p>

          <p className="text-gray-600">
            {product.description}
          </p>

          <button className="w-full bg-black text-white py-4 rounded-full text-xs tracking-[0.25em] uppercase">
            Add to Cart
          </button>
        </div>

      </section>
    </main>
  );
}