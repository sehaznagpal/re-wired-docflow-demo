import { useState } from 'react';
import type { ScreenProps } from './screenTypes';
import ProgressBar from '../components/ProgressBar';
import FooterNav from '../components/FooterNav';
import AccordionCard from '../components/AccordionCard';
import { problemsByMode, toModeGroup } from '../data/problems';
import { solutions } from '../data/solutions';

export default function Screen5RemainingGrid({ answers, onNext, onBack }: ScreenProps) {
  const group = toModeGroup(answers.practiceMode ?? 'both');
  const remaining = problemsByMode[group].filter((p) => p.key !== answers.topProblem);
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col pb-24">
      <ProgressBar value={71} />
      <div className="px-5 pt-6 flex flex-col gap-4">
        <h1 className="font-display font-bold text-2xl text-text-primary">
          A few more things we sort out.
        </h1>
        <div className="flex flex-col gap-3">
          {remaining.map((card) => {
            const solution = solutions[card.key];
            return (
              <AccordionCard
                key={card.key}
                icon={card.icon}
                label={card.label}
                description={card.description}
                expanded={expandedKeys.has(card.key)}
                onToggle={() => toggle(card.key)}
                solutionHeadline={solution.headlineCorrection}
                solutionBullets={solution.whatWeBuild.slice(0, 2)}
              />
            );
          })}
        </div>
      </div>
      <FooterNav onBack={onBack} onContinue={onNext} continueLabel="That's everything. Let's talk" />
    </div>
  );
}
