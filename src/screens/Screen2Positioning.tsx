import type { ScreenProps } from './screenTypes';
import ProgressBar from '../components/ProgressBar';
import FooterNav from '../components/FooterNav';

export default function Screen2Positioning({ answers, onNext, onBack }: ScreenProps) {
  const isOffline = answers.practiceMode === 'offline';

  return (
    <div className="min-h-screen flex flex-col pb-24">
      <ProgressBar value={28} />
      <div className="px-5 pt-10 flex flex-col gap-4">
        {isOffline ? (
          <>
            <h1 className="font-display font-bold text-3xl text-text-primary">
              <span className="line-through text-text-muted">Replacing your clinic.</span>{' '}
              Running it better.
            </h1>
            <p className="text-text-muted text-sm">
              Records, reminders, and follow-ups sorted digitally. Your in-person setup stays exactly as it is.
            </p>
          </>
        ) : (
          <>
            <h1 className="font-display font-bold text-3xl text-text-primary">
              <span className="line-through text-text-muted">Five tools for one clinic.</span>{' '}
              One system, start to finish.
            </h1>
            <p className="text-text-muted text-sm">
              Booking, reminders, consultations, prescriptions — all handled automatically on WhatsApp.
            </p>
          </>
        )}
      </div>
      <FooterNav onBack={onBack} onContinue={onNext} continueLabel="Okay, show me where I'm losing time" />
    </div>
  );
}
