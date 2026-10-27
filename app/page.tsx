import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AnimeCard from "@/components/AnimeCard";
import { animeList } from "@/data/anime";

export default function Home() {
  const featuredAnime = animeList[0];

  return (
    <main className="min-h-screen bg-[#202020] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#181818] to-purple-950" />

        <div className="relative mx-auto flex max-w-6xl items-center gap-10 px-8 py-20">

          <div className="max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
              Featured Anime
            </p>

            <h1 className="mb-5 text-5xl font-bold">
              {featuredAnime.title}
            </h1>

            <div className="mb-5 flex gap-5 text-sm text-gray-300">
              <span>⭐ {featuredAnime.rating}</span>
              <span>2026</span>
              <span>{featuredAnime.episodes.length} Episodes</span>
              <span>HD</span>
            </div>

            <p className="mb-8 leading-7 text-gray-300">
              {featuredAnime.description}
            </p>

            <div className="flex gap-3">
              <Link
                href={`/watch/${featuredAnime.id}?episode=1`}
                className="rounded-md bg-pink-600 px-7 py-3 font-semibold hover:bg-pink-500"
              >
                ▶ Watch Now
              </Link>

              <Link
                href={`/anime/${featuredAnime.id}`}
                className="rounded-md bg-white/10 px-7 py-3 font-semibold hover:bg-white/20"
              >
                More Info
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Trending */}
      <section className="mx-auto max-w-6xl px-8 py-12">

        <h2 className="mb-6 text-2xl font-bold">
          Trending
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {animeList.map((anime) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
            />
          ))}
        </div>

      </section>

      {/* Latest Episodes */}
      <section className="mx-auto max-w-6xl px-8 pb-16">

        <h2 className="mb-6 text-2xl font-bold">
          Latest Episodes
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          {animeList.slice(0, 4).map((anime) => (
            <Link
              key={anime.id}
              href={`/watch/${anime.id}?episode=${anime.episodes.length}`}
              className="flex gap-4 rounded-lg bg-[#2b2b2b] p-4 hover:bg-[#333333]"
            >

              <Image
                src={anime.image}
                alt={anime.title}
                width={64}
                height={96}
                className="h-24 w-16 rounded object-cover"
              />

              <div>
                <h3 className="font-semibold">
                  {anime.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Latest Episode: {anime.episodes.length}
                </p>

                <p className="mt-2 text-xs text-pink-500">
                  ▶ Watch Episode {anime.episodes.length}
                </p>
              </div>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}