import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl tracking-[0.3em] font-light text-black"
        >
          LUMÉE
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <Link
            href="/"
            className="hover:text-[#C08A5D] transition"
          >
            Home
          </Link>

          <Link
            href="/collection"
            className="hover:text-[#C08A5D] transition"
          >
            Collection
          </Link>

          <Link
            href="/about"
            className="hover:text-[#C08A5D] transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#C08A5D] transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}