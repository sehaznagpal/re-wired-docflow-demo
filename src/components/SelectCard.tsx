import { motion } from 'framer-motion';

interface SelectCardProps {
  icon: string;
  label: string;
  description?: string;
  selected: boolean;
  onSelect: () => void;
}

export default function SelectCard({ icon, label, description, selected, onSelect }: SelectCardProps) {
  return (
    <motion.button
      onClick={onSelect}
      whileTap={{ scale: 0.97 }}
      className={
        'text-left rounded-2xl border p-4 flex flex-col gap-2 w-full transition-colors ' +
        (selected
          ? 'border-accent-teal bg-accent-teal/10'
          : 'border-border-default bg-bg-cream')
      }
    >
      <img src={icon} alt="" className="w-10 h-10 object-contain" />
      <span className="font-display font-semibold text-text-primary">{label}</span>
      {description && <span className="text-sm text-text-muted">{description}</span>}
    </motion.button>
  );
}
