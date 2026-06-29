import type { ScreenProps } from './screenTypes';
import type { PracticeMode } from '../types';
import ProgressBar from '../components/ProgressBar';
import SelectCard from '../components/SelectCard';
import FooterNav from '../components/FooterNav';
import docflow from '../assets/icons/docflow.png';
import placeholderGeneric from '../assets/icons/placeholder-generic.svg';

const cards: { value: PracticeMode; label: string; description: string; icon: string }[] = [
  { value: 'offline', label: 'Only Offline', description: 'I only see patients in person', icon: docflow },
  // TODO: custom illustration needed for "Only Online" — no laptop/video-call doodle exists yet
  { value: 'online', label: 'Only Online', description: 'I consult entirely online', icon: placeholderGeneric },
  // TODO: custom illustration needed for "Both" combined icon
  { value: 'both', label: 'Both', description: 'I do a mix of both', icon: placeholderGeneric },
];

export default function Screen1PracticeMode({ answers, setAnswers, onNext }: ScreenProps) {
  return (
    <div className="min-h-screen flex flex-col pb-24">
      <ProgressBar value={14} />
      <div className="px-5 pt-6 flex flex-col gap-1">
        <h1 className="font-display font-bold text-2xl text-text-primary">
          How do you currently consult patients?
        </h1>
        <p className="text-text-muted text-sm">This decides which tools actually make sense for you.</p>
      </div>
      <div className="px-5 pt-6 flex flex-col gap-3">
        {cards.map((card) => (
          <SelectCard
            key={card.value}
            icon={card.icon}
            label={card.label}
            description={card.description}
            selected={answers.practiceMode === card.value}
            onSelect={() => setAnswers({ ...answers, practiceMode: card.value })}
          />
        ))}
      </div>
      <FooterNav backHidden onContinue={onNext} continueDisabled={answers.practiceMode === null} />
    </div>
  );
}
