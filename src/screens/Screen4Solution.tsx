import type { ScreenProps } from './screenTypes';
import ProgressBar from '../components/ProgressBar';
import FooterNav from '../components/FooterNav';
import SolutionMedia from '../components/SolutionMedia';
import { solutions } from '../data/solutions';

export default function Screen4Solution({ answers, onNext, onBack, onJumpTo }: ScreenProps) {
  const solution = answers.topProblem ? solutions[answers.topProblem] : undefined;
  if (!solution) return null;

  return (
    <div className="min-h-screen flex flex-col pb-24">
      <ProgressBar value={57} />
      <div className="px-5 pt-6 flex flex-col gap-4">
        <span className="text-xs font-medium text-accent-lavender uppercase tracking-wide">Your fix</span>
        <h1 className="font-display font-bold text-2xl text-text-primary">
          <span className="line-through text-text-muted">{solution.headlineStrikethrough}</span>{' '}
          {solution.headlineCorrection}
        </h1>

        <SolutionMedia fallbackImageSrc={solution.fallbackImageSrc} videoSrc={solution.videoSrc} />

        <div className="flex flex-col gap-3">
          <div>
            <h2 className="font-display font-semibold text-text-primary mb-1">Why this happens</h2>
            <p className="text-text-muted text-sm">{solution.whyThisHappens}</p>
          </div>
          <div>
            <h2 className="font-display font-semibold text-text-primary mb-1">What we build</h2>
            <ul className="space-y-1">
              {solution.whatWeBuild.map((bullet) => (
                <li key={bullet} className="text-sm text-text-primary flex gap-2">
                  <span className="text-accent-mint">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button onClick={() => onJumpTo(6)} className="text-center text-sm text-text-muted underline">
          Talk to us about this →
        </button>
      </div>
      <FooterNav onBack={onBack} onContinue={onNext} continueLabel="See other ways we help" />
    </div>
  );
}
