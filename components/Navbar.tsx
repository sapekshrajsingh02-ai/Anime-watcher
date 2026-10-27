import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#111111] px-8 py-5 text-white">

      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        Ani<span className="text-pink-500">-otaku</span>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-sm">

        <Link
          href="/"
          className="hover:text-pink-500"
        >
          Home
        </Link>

        <Link
          href="/browse"
          className="hover:text-pink-500"
        >
          Browse
        </Link>

        <Link
          href="/watchlist"
          className="hover:text-pink-500"
        >
          Watchlist
        </Link>

        <Link
          href="/search"
          className="hover:text-pink-500"
        >
          🔍 Search
        </Link>

      </div>
    </nav>
  );
}