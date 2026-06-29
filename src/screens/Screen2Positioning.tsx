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
              A <span className="line-through text-text-muted">replacement for your clinic</span> tool
              that runs it better.
            </h1>
            <p className="text-text-muted">
              Think of this as your back-office. Patient records, reminders, and admin, sorted. Your
              in-person workflow stays exactly as it is.
            </p>
          </>
        ) : (
          <>
            <h1 className="font-display font-bold text-3xl text-text-primary">
              From <span className="line-through text-text-muted">booking to prescription</span>{' '}
              everything, in one place.
            </h1>
            <p className="text-text-muted">
              This becomes your full consultation system. Patients book, pay, consult, and get
              prescriptions, without leaving WhatsApp.
            </p>
          </>
        )}
      </div>
      <FooterNav onBack={onBack} onContinue={onNext} continueLabel="Okay, show me where I'm losing time" />
    </div>
  );
}
