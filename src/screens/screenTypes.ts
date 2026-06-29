import type { Answers } from '../types';
import type { Direction } from '../styles/motionVariants';

export interface ScreenProps {
  answers: Answers;
  setAnswers: (a: Answers) => void;
  onNext: () => void;
  onBack: () => void;
  onJumpTo: (index: number) => void;
  direction: Direction;
}
