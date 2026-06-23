import Image from "next/image";
import Link from "next/link";

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
            <Link href="/products" className="hover:text-black transition">
              Shop
            </Link>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.4em] text-xs text-[#C08A5D]">
            Luxury Boutique
          </p>

          <h2 className="text-5xl md:text-7xl font-light mt-6 leading-tight">
            Luxury in
            <br />
            Every Step
          </h2>

          <p className="mt-8 text-gray-500 max-w-lg text-lg leading-relaxed">
            Curated heels and handbags designed for elegance, confidence,
            and timeless sophistication.
          </p>

          <Link
            href="/products"
            className="mt-10 inline-block px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition"
          >
            Shop Collection
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <Image
            src="/hero-heels.jpg"
            alt="Luxury Heel"
            width={500}
            height={700}
            priority
            className="rounded-3xl object-cover h-[340px] w-full shadow-2xl"
          />

          <div className="space-y-5 pt-10">
            <Image
              src="/heel-2.jpg"
              alt="Silver Heel"
              width={500}
              height={500}
              className="rounded-3xl object-cover h-[220px] w-full shadow-xl"
            />

            <Image
              src="/bag-1.jpg"
              alt="Luxury Bag"
              width={500}
              height={500}
              className="rounded-3xl object-cover h-[220px] w-full shadow-xl"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <Link
            href="/products/midnight-stiletto"
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <Image
              src="/hero-heels.jpg"
              alt="Midnight Stiletto"
              width={500}
              height={500}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h4 className="font-medium">
                Midnight Stiletto
              </h4>

              <p className="text-[#C08A5D]">
                R1 299
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section
        id="about"
        className="bg-white py-28 px-6 md:px-10"
      >
        <div className="max-w-4xl mx-auto text-center">
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

      <section
        id="contact"
        className="py-28 px-6 md:px-10 bg-[#F8F5F2]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-xs text-[#C08A5D]">
            Contact
          </p>

          <h3 className="text-4xl font-light mt-4">
            Get In Touch
          </h3>

          <p className="mt-8 text-gray-500 text-lg">
            hello@lumeeboutique.com
          </p>

          <p className="mt-3 text-gray-500">
            Benoni, Gauteng, South Africa
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 border-t border-gray-200">
        <p>© {new Date().getFullYear()} LUMÉE Boutique</p>
      </footer>
    </main>
  );
}