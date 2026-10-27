import Link from "next/link";
import Image from "next/image";

type Anime = {
  id: number;
  title: string;
  image: string;
  rating: string;
  episodes: { number: number }[];
  genres?: string[];
};

export default function AnimeCard({
  anime,
}: {
  anime: Anime;
}) {
  return (
    <Link
      href={`/anime/${anime.id}`}
      className="group block"
    >
      {/* Poster */}
      <div className="relative overflow-hidden rounded-lg bg-[#2b2b2b]">

        <Image
          src={anime.image}
          alt={anime.title}
          width={300}
          height={420}
          className="h-[300px] w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute left-2 top-2 rounded bg-black/80 px-2 py-1 text-xs">
          ⭐ {anime.rating}
        </div>

        {/* Episode count */}
        <div className="absolute bottom-2 right-2 rounded bg-pink-600 px-2 py-1 text-xs font-semibold">
          {anime.episodes.length} EP
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-pink-600 px-5 py-3 font-semibold">
            ▶ Watch
          </span>
        </div>

      </div>

      {/* Title */}
      <h3 className="mt-3 truncate font-semibold group-hover:text-pink-500">
        {anime.title}
      </h3>

      {/* Genres */}
      <p className="mt-1 truncate text-sm text-gray-400">
        {anime.genres?.slice(0, 2).join(" • ")}
      </p>

    </Link>
  );
}