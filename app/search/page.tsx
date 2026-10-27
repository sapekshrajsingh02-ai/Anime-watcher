import Link from "next/link";
import Image from "next/image";
import { animeList } from "@/data/anime";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;

  const query = q.toLowerCase().trim();

  const results = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(query)
  );

  return (
    <main className="min-h-screen bg-[#202020] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-[#111111] px-8 py-5">

        <Link href="/" className="text-2xl font-bold">
          Ani<span className="text-pink-500">Verse</span>
        </Link>

        <Link
          href="/"
          className="text-sm text-gray-300 hover:text-pink-500"
        >
          ← Home
        </Link>

      </nav>

      {/* Search */}
      <section className="mx-auto max-w-6xl px-8 py-10">

        <form className="mb-10 flex gap-3">

          <input
            name="q"
            defaultValue={q}
            placeholder="Search anime..."
            className="w-full rounded-md bg-[#2b2b2b] px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            className="rounded-md bg-pink-600 px-6 font-semibold hover:bg-pink-500"
          >
            Search
          </button>

        </form>

        {/* Results */}
        <h1 className="mb-6 text-2xl font-bold">
          {query
            ? `Search results for "${q}"`
            : "All Anime"}
        </h1>

        {results.length === 0 ? (

          <p className="text-gray-400">
            No anime found.
          </p>

        ) : (

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

            {results.map((anime) => (

              <Link
                key={anime.id}
                href={`/anime/${anime.id}`}
                className="group"
              >

                <Image
                  src={anime.image}
                  alt={anime.title}
                  width={300}
                  height={420}
                  className="h-[300px] w-full rounded-lg object-cover transition group-hover:scale-105"
                />

                <h2 className="mt-3 truncate font-semibold group-hover:text-pink-500">
                  {anime.title}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  ⭐ {anime.rating}
                </p>

              </Link>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}