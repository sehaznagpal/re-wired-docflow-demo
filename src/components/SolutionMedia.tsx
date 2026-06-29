interface SolutionMediaProps {
  videoSrc?: string;
  fallbackImageSrc: string;
  aspect?: '16:9' | '9:16';
}

export default function SolutionMedia({ videoSrc, fallbackImageSrc, aspect = '16:9' }: SolutionMediaProps) {
  const aspectClass = aspect === '16:9' ? 'aspect-video' : 'aspect-[9/16]';

  return (
    <div className={`rounded-2xl border border-border-default bg-bg-cream overflow-hidden ${aspectClass}`}>
      {/* TODO: insert solution demo video/gif here — see /src/assets/video/ (currently empty) */}
      {videoSrc ? (
        <video muted loop autoPlay playsInline src={videoSrc} className="w-full h-full object-cover" />
      ) : (
        <img src={fallbackImageSrc} alt="" className="w-full h-full object-contain p-8" />
      )}
    </div>
  );
}
