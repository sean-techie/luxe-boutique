import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
  {
    slug: "midnight-stiletto",
    name: "Midnight Stiletto",
    price: "R1 299",
    img: "/hero-heels.jpg",
    description:
      "Luxury black stiletto designed for elegance and confidence.",
  },
  {
    slug: "nude-signature-heel",
    name: "Nude Signature Heel",
    price: "R1 399",
    img: "/nude-signature-heel-v2.jpg",
    description: "Soft nude heel made for everyday elegance.",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F5F2] flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl items-center">

        
        <div className="relative w-full h-[500px] md:h-[650px]">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover rounded-3xl"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        
        <div>
          <h1 className="text-4xl font-semibold">{product.name}</h1>

          <p className="text-[#C08A5D] text-xl mt-3">
            {product.price}
          </p>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <button className="mt-8 px-8 py-4 bg-black text-white rounded-full hover:opacity-80 transition">
            Add to Bag
          </button>
        </div>

      </div>
    </main>
  );
}