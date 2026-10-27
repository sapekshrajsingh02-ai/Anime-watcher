"use client";

import { useEffect, useState } from "react";

export default function WatchlistButton({
  animeId,
}: {
  animeId: number;
}) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );

    queueMicrotask(() => setSaved(watchlist.includes(animeId)));
  }, [animeId]);

  function toggleWatchlist() {
    const watchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );

    if (watchlist.includes(animeId)) {
      const updated = watchlist.filter(
        (id: number) => id !== animeId
      );

      localStorage.setItem(
        "watchlist",
        JSON.stringify(updated)
      );

      setSaved(false);
    } else {
      const updated = [...watchlist, animeId];

      localStorage.setItem(
        "watchlist",
        JSON.stringify(updated)
      );

      setSaved(true);
    }
  }

  return (
    <button
      onClick={toggleWatchlist}
      className="rounded-md bg-[#2b2b2b] px-6 py-3 font-semibold hover:bg-pink-600"
    >
      {saved ? "✓ Added to Watchlist" : "+ Add to Watchlist"}
    </button>
  );
}