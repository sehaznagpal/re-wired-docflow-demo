import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Answers } from './types';
import { slideTransition, type Direction } from './styles/motionVariants';
import TopBar from './components/TopBar';

import Screen0Greeting from './screens/Screen0Greeting';
import Screen1PracticeMode from './screens/Screen1PracticeMode';
import Screen2Positioning from './screens/Screen2Positioning';
import Screen3ProblemSelect from './screens/Screen3ProblemSelect';
import Screen4Solution from './screens/Screen4Solution';
import Screen5RemainingGrid from './screens/Screen5RemainingGrid';
import Screen6FinalCTA from './screens/Screen6FinalCTA';

const screens = [
  Screen0Greeting,
  Screen1PracticeMode,
  Screen2Positioning,
  Screen3ProblemSelect,
  Screen4Solution,
  Screen5RemainingGrid,
  Screen6FinalCTA,
];

const initialAnswers: Answers = { practiceMode: null, topProblem: null };

function App() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('forward');
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const goTo = (index: number, dir: Direction) => {
    setDirection(dir);
    setScreenIndex(index);
  };

  const onNext = () => goTo(Math.min(screenIndex + 1, screens.length - 1), 'forward');
  const onBack = () => goTo(Math.max(screenIndex - 1, 0), 'back');
  const onJumpTo = (index: number) => goTo(index, index > screenIndex ? 'forward' : 'back');

  const onRestart = () => {
    setAnswers(initialAnswers);
    goTo(0, 'back');
  };

  const hasAnswers = answers.practiceMode !== null || answers.topProblem !== null;

  const ActiveScreen = screens[screenIndex];

  return (
    <div className="min-h-screen bg-bg-base">
      {screenIndex > 0 && <TopBar onRestart={onRestart} hasAnswers={hasAnswers} />}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={screenIndex}
          initial={{ x: direction === 'forward' ? 40 : -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 'forward' ? -40 : 40, opacity: 0 }}
          transition={slideTransition}
        >
          <ActiveScreen
            answers={answers}
            setAnswers={setAnswers}
            onNext={onNext}
            onBack={onBack}
            onJumpTo={onJumpTo}
            direction={direction}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
