export type PracticeMode = 'offline' | 'online' | 'both';

export type ProblemKey =
  | 'booking-chaos'
  | 'whatsapp-overload'
  | 'prescription-delays'
  | 'no-shows'
  | 'reception-bottleneck'
  | 'paper-records'
  | 'missed-followups'
  | 'manual-reminders';

export interface Answers {
  practiceMode: PracticeMode | null;
  topProblem: ProblemKey | null;
  name?: string;
  clinicName?: string;
  whatsappNumber?: string;
}
