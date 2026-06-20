import Image from "next/image";

export default function Product() {
  return (
    <main className="min-h-screen bg-[#F8F5F2] flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl items-center">

        <Image
          src="/hero-heels.jpg"
          alt="Midnight Stiletto"
          width={600}
          height={700}
          className="rounded-3xl"
        />

        <div>
          <h1 className="text-4xl font-semibold">Midnight Stiletto</h1>
          <p className="text-[#C08A5D] text-xl mt-3">R1 299</p>
          <p className="mt-6 text-gray-600">
            Luxury black stiletto designed for elegance and confidence.
          </p>

          <button className="mt-8 px-8 py-4 bg-black text-white rounded-full">
            Add to Bag
          </button>
        </div>

      </div>
    </main>
  );
}