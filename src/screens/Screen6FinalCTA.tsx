import type { ScreenProps } from './screenTypes';
import ProgressBar from '../components/ProgressBar';
import LeadForm from '../components/LeadForm';
import { SHOW_TESTIMONIAL, MAIN_SITE_URL } from '../config/appConfig';

export default function Screen6FinalCTA({ answers, setAnswers }: ScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-5 pt-2 pb-10 gap-6">
      <ProgressBar value={100} doneState />

      <h1 className="font-display font-bold text-2xl text-text-primary">
        Tell us what is slowing you down. We'll tell you how to fix it.
      </h1>

      {SHOW_TESTIMONIAL && (
        <div className="flex items-center gap-3 bg-bg-cream rounded-2xl p-3">
          <div className="w-10 h-10 rounded-full bg-border-default" />
          <span className="text-sm text-text-muted">
            Trusted by Dr. Tanaya Narendra and her practice
          </span>
        </div>
      )}

      <LeadForm
        answers={answers}
        setAnswers={setAnswers}
        practiceMode={answers.practiceMode}
        topProblem={answers.topProblem}
      />

      <a
        href={MAIN_SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-sm text-accent-teal underline"
      >
        Visit our website
      </a>

      <p className="text-center text-xs text-text-muted mt-auto">
        Re-Wired — Interactive Demo, 2026
      </p>
    </div>
  );
}
