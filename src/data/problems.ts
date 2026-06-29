import type { PracticeMode, ProblemKey } from '../types';

import whatsappDoodle from '../assets/icons/whatsapp-doodle.png';
import aiChatbot from '../assets/icons/ai-chatbot.png';
import docflow from '../assets/icons/docflow.png';
import doodlePencil from '../assets/icons/doodle-pencil.png';
import doodlePhone from '../assets/icons/doodle-phone.png';
import placeholderGeneric from '../assets/icons/placeholder-generic.svg';

export type ModeGroup = 'offline' | 'onlineOrBoth';

export function toModeGroup(mode: PracticeMode): ModeGroup {
  return mode === 'offline' ? 'offline' : 'onlineOrBoth';
}

export interface ProblemCard {
  key: ProblemKey;
  icon: string;
  label: string;
  description: string;
}

export const problemsByMode: Record<ModeGroup, ProblemCard[]> = {
  onlineOrBoth: [
    {
      key: 'booking-chaos',
      // TODO: custom illustration needed for booking-chaos — no existing booking/calendar doodle
      icon: placeholderGeneric,
      label: 'Booking chaos',
      description: 'Patients book through five different channels and half get missed',
    },
    {
      key: 'whatsapp-overload',
      icon: whatsappDoodle,
      label: 'WhatsApp overload',
      description: 'Hundreds of chats a day, same questions, answered by hand',
    },
    {
      key: 'prescription-delays',
      icon: aiChatbot,
      label: 'Prescription delays',
      description: 'Writing and sending prescriptions eats into consultation time',
    },
    {
      key: 'no-shows',
      // TODO: custom illustration needed for no-shows — reusing doodle-phone as a loose fit
      icon: doodlePhone,
      label: 'No-shows',
      description: 'Patients forget, you lose the slot, nobody follows up',
    },
  ],
  offline: [
    {
      key: 'reception-bottleneck',
      // TODO: custom illustration needed for reception-bottleneck — no existing front-desk doodle
      icon: placeholderGeneric,
      label: 'Reception bottleneck',
      description: 'Your front desk is the only system you have',
    },
    {
      key: 'paper-records',
      icon: doodlePencil,
      label: 'Paper records',
      description: 'Patient history scattered across files and memory',
    },
    {
      key: 'missed-followups',
      icon: docflow,
      label: 'Missed follow-ups',
      description: "No way to know who should've come back by now",
    },
    {
      key: 'manual-reminders',
      icon: doodlePhone,
      label: 'Manual reminders',
      description: 'Calling patients one by one to confirm appointments',
    },
  ],
};

export const allProblemCards: ProblemCard[] = [
  ...problemsByMode.onlineOrBoth,
  ...problemsByMode.offline,
];

export function findProblemCard(key: ProblemKey | null): ProblemCard | undefined {
  if (!key) return undefined;
  return allProblemCards.find((p) => p.key === key);
}
