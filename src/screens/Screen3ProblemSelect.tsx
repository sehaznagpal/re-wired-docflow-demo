import type { ScreenProps } from './screenTypes';
import ProgressBar from '../components/ProgressBar';
import SelectCard from '../components/SelectCard';
import FooterNav from '../components/FooterNav';
import { problemsByMode, toModeGroup } from '../data/problems';

export default function Screen3ProblemSelect({ answers, setAnswers, onNext, onBack }: ScreenProps) {
  const group = toModeGroup(answers.practiceMode ?? 'both');
  const cards = problemsByMode[group];

  return (
    <div className="min-h-screen flex flex-col pb-24">
      <ProgressBar value={42} />
      <div className="px-5 pt-6 flex flex-col gap-1">
        <h1 className="font-display font-bold text-2xl text-text-primary">
          Which of these slows you down the most?
        </h1>
        <p className="text-text-muted text-sm">Pick one, we'll show you exactly how we'd fix it.</p>
      </div>
      <div className="px-5 pt-6 grid grid-cols-2 gap-3">
        {cards.map((card) => (
          <SelectCard
            key={card.key}
            icon={card.icon}
            label={card.label}
            description={card.description}
            selected={answers.topProblem === card.key}
            onSelect={() => setAnswers({ ...answers, topProblem: card.key })}
          />
        ))}
      </div>
      <FooterNav onBack={onBack} onContinue={onNext} continueDisabled={answers.topProblem === null} />
    </div>
  );
}
