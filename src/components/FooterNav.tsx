interface FooterNavProps {
  onBack?: () => void;
  onContinue: () => void;
  continueDisabled?: boolean;
  backHidden?: boolean;
  continueLabel?: string;
  backLabel?: string;
}

export default function FooterNav({
  onBack,
  onContinue,
  continueDisabled = false,
  backHidden = false,
  continueLabel = 'Continue',
  backLabel = 'Back',
}: FooterNavProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-bg-base border-t border-border-default px-5 py-4 flex items-center justify-between gap-3 z-20">
      {!backHidden ? (
        <button
          onClick={onBack}
          className="rounded-full border border-accent-teal text-accent-teal px-5 py-2.5 text-sm font-medium"
        >
          {backLabel}
        </button>
      ) : (
        <span />
      )}
      <button
        onClick={onContinue}
        disabled={continueDisabled}
        className={
          continueDisabled
            ? 'rounded-full bg-accent-teal text-white px-6 py-2.5 text-sm font-medium opacity-40 cursor-not-allowed'
            : 'rounded-full bg-accent-teal text-white px-6 py-2.5 text-sm font-medium'
        }
      >
        {continueLabel} →
      </button>
    </div>
  );
}
