import { MAIN_SITE_URL } from '../config/appConfig';

interface TopBarProps {
  onRestart: () => void;
  hasAnswers: boolean;
}

export default function TopBar({ onRestart, hasAnswers }: TopBarProps) {
  const handleRestartClick = () => {
    if (hasAnswers) {
      const confirmed = window.confirm('Restart the demo? Your answers so far will be lost.');
      if (!confirmed) return;
    }
    onRestart();
  };

  return (
    <div className="sticky top-0 z-20 bg-bg-base">
      <div className="flex items-center justify-between px-5 py-3">
        <button
          onClick={handleRestartClick}
          className="font-display font-bold text-text-primary text-lg"
        >
          Re-Wired
        </button>
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted hover:text-accent-teal transition-colors"
        >
          Visit full site →
        </a>
      </div>
      <div className="px-5 pb-2">
        <span className="inline-block rounded-full bg-bg-cream text-text-muted text-xs px-3 py-1">
          Interactive Demo
        </span>
      </div>
    </div>
  );
}
