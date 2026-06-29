import { motion } from 'framer-motion';

interface AccordionCardProps {
  icon: string;
  label: string;
  description: string;
  expanded: boolean;
  onToggle: () => void;
  solutionHeadline: string;
  solutionBullets: string[];
}

export default function AccordionCard({
  icon,
  label,
  description,
  expanded,
  onToggle,
  solutionHeadline,
  solutionBullets,
}: AccordionCardProps) {
  return (
    <div className="rounded-2xl border border-border-default bg-bg-cream overflow-hidden">
      <button onClick={onToggle} className="w-full text-left p-4 flex items-start gap-3">
        <img src={icon} alt="" className="w-8 h-8 object-contain flex-shrink-0" />
        <div className="flex-1">
          <div className="font-display font-semibold text-text-primary">{label}</div>
          <div className="text-sm text-text-muted">{description}</div>
        </div>
        <span className="text-text-muted">{expanded ? '−' : '+'}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4 pt-1">
          <div className="font-display font-semibold text-accent-teal mb-2">{solutionHeadline}</div>
          <ul className="space-y-1">
            {solutionBullets.map((bullet) => (
              <li key={bullet} className="text-sm text-text-primary flex gap-2">
                <span className="text-accent-mint">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
