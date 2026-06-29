import { useState } from 'react';
import type { Answers, PracticeMode, ProblemKey } from '../types';
import { buildLeadMessage, buildWaLink, GENERIC_MESSAGE } from '../utils/buildWaLink';
import { findProblemCard } from '../data/problems';

interface LeadFormProps {
  answers: Answers;
  setAnswers: (a: Answers) => void;
  practiceMode: PracticeMode | null;
  topProblem: ProblemKey | null;
}

export default function LeadForm({ answers, setAnswers, topProblem }: LeadFormProps) {
  const [name, setName] = useState(answers.name ?? '');
  const [clinicName, setClinicName] = useState(answers.clinicName ?? '');
  const [whatsappNumber, setWhatsappNumber] = useState(answers.whatsappNumber ?? '');

  const canSubmit = name.trim() !== '' && clinicName.trim() !== '' && whatsappNumber.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setAnswers({ ...answers, name, clinicName, whatsappNumber });
    const problemLabel = findProblemCard(topProblem)?.label ?? 'getting set up';
    const message = buildLeadMessage(name, clinicName, problemLabel);
    window.open(buildWaLink(message), '_blank');
  };

  const handleGenericClick = () => {
    window.open(buildWaLink(GENERIC_MESSAGE), '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-text-muted">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-border-default px-4 py-3 text-text-primary"
          placeholder="Dr. Your Name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-text-muted">Clinic name</label>
        <input
          type="text"
          value={clinicName}
          onChange={(e) => setClinicName(e.target.value)}
          className="rounded-xl border border-border-default px-4 py-3 text-text-primary"
          placeholder="Your Clinic"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-text-muted">WhatsApp number</label>
        <div className="flex items-center rounded-xl border border-border-default overflow-hidden">
          <span className="px-3 text-text-muted bg-bg-cream py-3">+91</span>
          <input
            type="tel"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className="flex-1 px-3 py-3 text-text-primary outline-none"
            placeholder="98765 43210"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={!canSubmit}
        className={
          canSubmit
            ? 'rounded-full bg-accent-teal text-white px-6 py-3 font-medium mt-2'
            : 'rounded-full bg-accent-teal text-white px-6 py-3 font-medium mt-2 opacity-40 cursor-not-allowed'
        }
      >
        Book a 15-min walkthrough
      </button>
      <button
        type="button"
        onClick={handleGenericClick}
        className="text-center text-sm text-accent-teal underline"
      >
        Or just message us directly
      </button>
    </form>
  );
}
