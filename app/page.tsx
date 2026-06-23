import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#1C1C1C]">
      
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 gap-3 md:gap-0">
          
          <h1 className="text-lg tracking-[0.45em] font-light">
            LUMÉE
          </h1>

          <nav className="flex flex-wrap justify-center md:justify-end gap-5 md:gap-8 text-xs tracking-[0.2em] uppercase text-gray-600">
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link href="/products">Shop</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        <div>
          <p className="uppercase tracking-[0.45em] text-xs text-[#A67C3D] font-medium">
            Luxury Boutique
          </p>

          <h2 className="text-4xl md:text-7xl font-light mt-6 leading-[1.05]">
            Luxury in
            <br />
            Every Step
          </h2>

          <p className="mt-6 text-gray-600 max-w-md text-base md:text-lg leading-relaxed">
            Curated heels and handbags crafted for elegance, confidence, and timeless sophistication.
          </p>

          <Link
            href="/products"
            className="mt-10 inline-flex px-8 py-4 bg-black text-white text-xs tracking-[0.25em] uppercase rounded-full"
          >
            Explore Collection
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          
          <div className="relative h-[420px]">
            <Image
              src="/hero-heels.jpg"
              alt="Luxury Heel"
              fill
              className="object-cover rounded-[28px] shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative h-[200px]">
              <Image
                src="/heel-2.jpg"
                alt="Silver Heel"
                fill
                className="object-cover rounded-[28px] shadow-xl"
              />
            </div>

            <div className="relative h-[200px]">
              <Image
                src="/bag-1.jpg"
                alt="Luxury Bag"
                fill
                className="object-cover rounded-[28px] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.45em] text-xs text-[#A67C3D] font-medium">
            Curated Selection
          </p>

          <h3 className="text-3xl md:text-4xl font-light mt-4">
            Featured Pieces
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <Link
            href="/products/midnight-stiletto"
            className="group bg-white/70 backdrop-blur-md border border-black/5 rounded-[28px] overflow-hidden shadow-sm"
          >
            <div className="relative h-[320px]">
              <Image
                src="/hero-heels.jpg"
                alt="Midnight Stiletto"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h4 className="text-gray-900 font-medium text-lg">
                Midnight Stiletto
              </h4>
              <p className="mt-2 text-[#A67C3D] font-medium">
                R1 299
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section id="about" className="bg-white py-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <p className="uppercase tracking-[0.45em] text-xs text-[#A67C3D] font-medium">
            Our Philosophy
          </p>

          <h3 className="text-3xl md:text-4xl font-light mt-5">
            Modern Luxury, Timeless Identity
          </h3>

          <p className="mt-8 text-gray-600 leading-relaxed text-base md:text-lg">
            LUMÉE is built on the idea of quiet luxury — pieces that speak through detail, not noise.
          </p>
        </div>
      </section>

      <section id="contact" className="py-28 px-6 md:px-10 bg-[#F7F3EE]">
        <div className="max-w-3xl mx-auto text-center">
          
          <p className="uppercase tracking-[0.45em] text-xs text-[#A67C3D] font-medium">
            Contact
          </p>

          <h3 className="text-3xl md:text-4xl font-light mt-5">
            Let’s Connect
          </h3>

          <p className="mt-8 text-gray-600 text-lg">
            hello@lumeeboutique.com
          </p>

          <p className="mt-3 text-gray-500">
            Benoni, Gauteng, South Africa
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-xs tracking-[0.2em] border-t border-black/5">
        © {new Date().getFullYear()} LUMÉE BOUTIQUE
      </footer>
    </main>
  );
}