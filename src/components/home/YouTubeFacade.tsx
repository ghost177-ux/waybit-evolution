import { useState } from "react";
import { Play } from "lucide-react";

interface Props {
  videoId: string;
  title: string;
  channelName: string;
  channelLogo: string;
}

/** 9:16 vertical video facade: loads the YouTube iframe only after click. */
export function YouTubeFacade({ videoId, title, channelName, channelLogo }: Props) {
  const [playing, setPlaying] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  );

  const onThumbError = () => {
    if (thumb.includes("maxresdefault")) {
      setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
    } else if (thumb.includes("hqdefault")) {
      setThumb(`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`);
    } else {
      setThumbFailed(true);
    }
  };

  if (playing) {
    return (
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-[9/16] w-full overflow-hidden rounded-xl bg-brand-dark text-left"
      aria-label={`Assistir depoimento: ${title}`}
    >
      <img
        src={thumb}
        alt=""
        loading="lazy"
        onError={() =>
          setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
        }
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* channel header, like the Shorts preview */}
      <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-black/60 to-transparent p-3">
        <img
          src={channelLogo}
          alt=""
          className="h-7 w-7 rounded-full border border-white/40 object-cover"
        />
        <span className="text-xs font-semibold text-white">{channelName}</span>
      </div>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red shadow-lg transition-transform group-hover:scale-110">
          <Play className="ml-1 h-6 w-6 fill-white text-white" aria-hidden />
        </span>
      </span>
    </button>
  );
}
