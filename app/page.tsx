import Image from "next/image";

const products = [
  {
    name: "Midnight Stiletto",
    price: "R1 299",
    img: "/hero-heels.jpg",
  },
  {
    name: "Silver Elegance Heel",
    price: "R1 199",
    img: "/heel-2.jpg",
  },
  {
    name: "Noir Signature Bag",
    price: "R1 899",
    img: "/bag-1.jpg",
  },
  {
    name: "Cognac Heritage Bag",
    price: "R1 699",
    img: "/bag-2.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8F5F2] via-white to-[#F3EFEA] text-[#1C1C1C]">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/50 border-b border-white/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
          <h1 className="text-xl tracking-[0.35em] font-light">
            LUMÉE
          </h1>

          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="#collection" className="hover:text-black transition">
              Collection
            </a>
            <a href="#about" className="hover:text-black transition">
              About
            </a>
            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.4em] text-xs text-[#C08A5D]">
            Luxury Boutique
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-none mt-6">
            Luxury in
            <br />
            Every Step
          </h2>

          <p className="mt-8 text-gray-500 max-w-lg leading-relaxed text-lg">
            Curated heels and handbags designed for women who embrace
            elegance, confidence, and timeless sophistication.
          </p>

          <div className="mt-10">
            <button className="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition duration-300 shadow-xl">
              Explore Collection
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-5">
            <Image
              src="/hero-heels.jpg"
              alt="Midnight Stiletto"
              width={500}
              height={700}
              className="rounded-[32px] object-cover h-[340px] w-full shadow-2xl"
            />

            <Image
              src="/heel-2.jpg"
              alt="Silver Elegance Heel"
              width={500}
              height={500}
              className="rounded-[32px] object-cover h-[220px] w-full shadow-xl"
            />
          </div>

          <div className="space-y-5 pt-10">
            <Image
              src="/bag-1.jpg"
              alt="Noir Signature Bag"
              width={500}
              height={500}
              className="rounded-[32px] object-cover h-[220px] w-full shadow-xl"
            />

            <Image
              src="/bag-2.jpg"
              alt="Cognac Heritage Bag"
              width={500}
              height={700}
              className="rounded-[32px] object-cover h-[340px] w-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section
        id="collection"
        className="max-w-7xl mx-auto px-6 md:px-10 py-24"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-xs text-[#C08A5D]">
            Collection
          </p>

          <h3 className="text-4xl font-light mt-4">
            Featured Pieces
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h4 className="font-medium text-lg">
                  {product.name}
                </h4>

                <p className="text-[#C08A5D] mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="bg-white py-28 px-6 md:px-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-xs text-[#C08A5D]">
            About
          </p>

          <h3 className="text-4xl font-light mt-4">
            Modern Luxury
          </h3>

          <p className="mt-8 text-gray-500 leading-relaxed text-lg">
            LUMÉE celebrates timeless elegance through carefully curated
            heels and handbags. Every piece is selected to elevate style,
            confidence, and sophistication for the modern woman.
          </p>
        </div>
      </section>

      <footer
        id="contact"
        className="py-12 text-center text-gray-400"
      >
        <p>© {new Date().getFullYear()} LUMÉE Boutique</p>
        <p className="mt-2">hello@lumeeboutique.com</p>
      </footer>
    </main>
  );
}