import Link from "next/link";
import { animeList } from "@/data/anime";
import VideoPlayer from "@/components/VideoPlayer";

export default async function AnimePage({
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
  const demoVideo =
    currentEpisode?.video || "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <nav className="flex items-center justify-between bg-[#181818] px-8 py-5">
        <Link href="/" className="text-2xl font-bold">
          Ani<span className="text-pink-500">Verse</span>
        </Link>

        <Link href={`/anime/${anime.id}`} className="text-sm text-gray-300 hover:text-pink-500">
          ← Back to Anime
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-8 py-10">
        <VideoPlayer
          title={`${anime.title} — Episode ${currentEpisodeNumber}`}
          video={demoVideo}
          videoType={currentEpisode?.videoType || "local"}
        />

        <div className="mt-6 flex items-center justify-between">
          {currentEpisodeNumber > 1 ? (
            <Link
              href={`/watch/${anime.id}?episode=${currentEpisodeNumber - 1}`}
              className="rounded-md bg-[#2b2b2b] px-5 py-3 hover:bg-pink-600"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {currentEpisodeNumber < episodeCount && (
            <Link
              href={`/watch/${anime.id}?episode=${currentEpisodeNumber + 1}`}
              className="rounded-md bg-pink-600 px-5 py-3 hover:bg-pink-500"
            >
              Next →
            </Link>
          )}
        </div>

        <div className="mt-10">
          <h1 className="text-3xl font-bold">{anime.title}</h1>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-400">
            <span>⭐ {anime.rating}</span>
            <span>{episodeCount} Episodes</span>
            <span>HD</span>
          </div>

          <p className="mt-5 max-w-3xl leading-7 text-gray-400">
            {anime.description}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">Episodes</h2>

          <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {anime.episodes.map((episodeEntry) => (
              <Link
                key={episodeEntry.number}
                href={`/watch/${anime.id}?episode=${episodeEntry.number}`}
                className={`rounded-md px-4 py-3 text-center text-sm ${
                  currentEpisodeNumber === episodeEntry.number
                    ? "bg-pink-600"
                    : "bg-[#2b2b2b] hover:bg-pink-600"
                }`}
              >
                {episodeEntry.number}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}