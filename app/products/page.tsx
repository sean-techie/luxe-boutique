import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Midnight Stiletto",
    price: "R1 299",
    img: "/hero-heels.jpg",
    href: "/products/midnight-stiletto",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F2] px-6 py-20">
      <h1 className="text-4xl text-center mb-12">Products</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <Link
            key={i}
            href={p.href}
            className="bg-white rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src={p.img}
              alt={p.name}
              width={500}
              height={500}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="font-medium">{p.name}</h2>
              <p className="text-[#C08A5D]">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}