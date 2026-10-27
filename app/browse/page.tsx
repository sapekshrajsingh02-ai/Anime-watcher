"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { animeList } from "@/data/anime";

const genres = ["All", "Action", "Adventure", "Fantasy", "Mystery", "Romance"];

export default function BrowsePage() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredAnime =
    selectedGenre === "All"
      ? animeList
      : animeList.filter((anime) =>
          anime.genres?.some(
            (genre) => genre.toLowerCase() === selectedGenre.toLowerCase()
          )
        );

  return (
    <main className="min-h-screen bg-[#202020] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-[#111111] px-8 py-5">
        <Link href="/" className="text-2xl font-bold">
          Ani<span className="text-pink-500">Verse</span>
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-pink-500">
            Home
          </Link>

          <Link href="/browse" className="text-pink-500">
            Browse
          </Link>

          <Link href="/search" className="hover:text-pink-500">
            Search
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-8 text-3xl font-bold">
          Browse Anime
        </h1>

        {/* Genre Filters */}
        <div className="mb-8 flex flex-wrap gap-3">

          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`rounded-md px-5 py-2 text-sm ${
                selectedGenre === genre
                  ? "bg-pink-600"
                  : "bg-[#2b2b2b] hover:bg-pink-600"
              }`}
            >
              {genre}
            </button>
          ))}

        </div>

        {/* Results */}
        <p className="mb-6 text-sm text-gray-400">
          Showing {filteredAnime.length} anime
        </p>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {filteredAnime.map((anime) => (
            <Link
              key={anime.id}
              href={`/anime/${anime.id}`}
              className="group"
            >

              <div className="relative overflow-hidden rounded-lg">

                <Image
                  src={anime.image}
                  alt={anime.title}
                  width={300}
                  height={420}
                  className="h-[300px] w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="absolute left-2 top-2 rounded bg-black/80 px-2 py-1 text-xs">
                  ⭐ {anime.rating}
                </span>

              </div>

              <h2 className="mt-3 truncate font-semibold group-hover:text-pink-500">
                {anime.title}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                TV • {anime.episodes.length} Episodes
              </p>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}