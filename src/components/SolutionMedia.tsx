interface SolutionMediaProps {
  videoSrc?: string;
  fallbackImageSrc: string;
}

export default function SolutionMedia({ videoSrc, fallbackImageSrc }: SolutionMediaProps) {
  if (videoSrc) {
    return (
      <div className="rounded-2xl overflow-hidden bg-black w-full max-w-xs mx-auto aspect-[9/16]">
        <video
          muted
          loop
          autoPlay
          playsInline
          src={videoSrc}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border-default bg-bg-cream overflow-hidden aspect-video">
      <img src={fallbackImageSrc} alt="" className="w-full h-full object-contain p-8" />
    </div>
  );
}
