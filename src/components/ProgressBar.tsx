import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  doneState?: boolean;
}

export default function ProgressBar({ value, doneState }: ProgressBarProps) {
  if (doneState) {
    return (
      <div className="flex items-center justify-center py-3">
        <div className="w-8 h-8 rounded-full bg-accent-mint flex items-center justify-center text-white text-sm">
          ✓
        </div>
      </div>
    );
  }

  return (
    <div className="h-1.5 w-full bg-border-default overflow-hidden">
      <motion.div
        className="h-full bg-accent-teal"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  );
}
