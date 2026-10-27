"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animeList } from "@/data/anime";

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );

    queueMicrotask(() => setWatchlist(saved));
  }, []);

  const savedAnime = animeList.filter((anime) =>
    watchlist.includes(anime.id)
  );

  function removeFromWatchlist(id: number) {
    const updated = watchlist.filter(
      (animeId) => animeId !== id
    );

    localStorage.setItem(
      "watchlist",
      JSON.stringify(updated)
    );

    setWatchlist(updated);
  }

  return (
    <main className="min-h-screen bg-[#202020] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-[#111111] px-8 py-5">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Ani<span className="text-pink-500">Verse</span>
        </Link>

        <Link
          href="/"
          className="text-sm text-gray-300 hover:text-pink-500"
        >
          ← Home
        </Link>
      </nav>

      {/* Watchlist */}
      <section className="mx-auto max-w-6xl px-8 py-12">

        <h1 className="mb-8 text-3xl font-bold">
          My Watchlist
        </h1>

        {savedAnime.length === 0 ? (
          <div className="rounded-lg bg-[#2b2b2b] p-10 text-center">
            <p className="text-gray-400">
              Your watchlist is empty.
            </p>

            <Link
              href="/browse"
              className="mt-5 inline-block rounded-md bg-pink-600 px-6 py-3 font-semibold hover:bg-pink-500"
            >
              Browse Anime
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {savedAnime.map((anime) => (
              <div key={anime.id}>

                <Link href={`/anime/${anime.id}`}>
                  <Image
                    src={anime.image}
                    alt={anime.title}
                    width={300}
                    height={420}
                    className="h-[300px] w-full rounded-lg object-cover transition duration-300 hover:scale-105"
                  />

                  <h2 className="mt-3 truncate font-semibold hover:text-pink-500">
                    {anime.title}
                  </h2>
                </Link>

                <button
                  onClick={() =>
                    removeFromWatchlist(anime.id)
                  }
                  className="mt-3 w-full rounded-md bg-[#2b2b2b] px-3 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>
        )}

      </section>
    </main>
  );
}