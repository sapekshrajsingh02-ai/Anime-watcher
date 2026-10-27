import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import { animeList } from "@/data/anime";

export default async function WatchPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ episode?: string }>;
}) {
  const { id } = await params;
  const { episode = "1" } = await searchParams;

  const anime = animeList.find((item) => item.id === Number(id));

  if (!anime) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#111111] text-white">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Anime Not Found</h1>
          <Link href="/" className="text-pink-500 hover:text-pink-400">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const episodeCount = anime.episodes.length;
  const currentEpisodeNumber = Math.min(
    Math.max(Number(episode) || 1, 1),
    episodeCount
  );
  const currentEpisode =
    anime.episodes[currentEpisodeNumber - 1] ?? anime.episodes[0];

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-[#181818] px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          Ani<span className="text-pink-500">Verse</span>
        </Link>

        <Link
          href={`/anime/${anime.id}`}
          className="text-sm text-gray-300 hover:text-pink-500"
        >
          ← Anime Details
        </Link>
      </nav>

      {/* Video Player */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
          <VideoPlayer
            title={`${anime.title} — Episode ${currentEpisodeNumber}`}
            video={currentEpisode.video}
            videoType={currentEpisode.videoType || "local"}
          />
        </div>

        {/* Episode Information */}
        <div className="flex flex-col justify-between gap-4 py-5 md:flex-row">
          <div>
            <h1 className="text-xl font-bold">{currentEpisode.title}</h1>

            <p className="text-sm text-gray-400">
              Episode {currentEpisodeNumber}
            </p>
          </div>

          {/* Previous / Next */}
          <div className="flex gap-3">
            {currentEpisodeNumber > 1 && (
              <Link
                href={`/watch/${anime.id}?episode=${currentEpisodeNumber - 1}`}
                className="rounded-md bg-[#292929] px-5 py-2 hover:bg-pink-600"
              >
                ← Previous
              </Link>
            )}

            {currentEpisodeNumber < episodeCount && (
              <Link
                href={`/watch/${anime.id}?episode=${currentEpisodeNumber + 1}`}
                className="rounded-md bg-pink-600 px-5 py-2 hover:bg-pink-500"
              >
                Next →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Episode List */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="mb-5 text-xl font-bold">Episodes</h2>

        <div className="grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12">
          {anime.episodes.map((episodeEntry) => {
            const active = episodeEntry.number === currentEpisodeNumber;

            return (
              <Link
                key={episodeEntry.number}
                href={`/watch/${anime.id}?episode=${episodeEntry.number}`}
                className={`rounded-md px-3 py-3 text-center text-sm ${
                  active
                    ? "bg-pink-600"
                    : "bg-[#292929] hover:bg-pink-600"
                }`}
              >
                {episodeEntry.number}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}