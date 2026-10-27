"use client";

type VideoPlayerProps = {
  title: string;
  video: string;
  videoType?: "local" | "youtube";
};

export default function VideoPlayer({
  title,
  video,
  videoType = "local",
}: VideoPlayerProps) {
  function getYouTubeEmbedUrl(url: string) {
    const videoId = url.includes("v=")
      ? url.split("v=")[1].split("&")[0]
      : url.split("/").pop();

    return `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="overflow-hidden rounded-lg bg-black">
      {videoType === "youtube" ? (
        <iframe
          className="aspect-video w-full"
          src={getYouTubeEmbedUrl(video)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          className="aspect-video w-full"
          controls
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      )}

      <div className="px-4 py-3">
        <h2 className="font-semibold">{title}</h2>
      </div>
    </div>
  );
}