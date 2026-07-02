import type { ProblemKey } from '../types';

import whatsappDoodle from '../assets/icons/whatsapp-doodle.png';
import aiChatbot from '../assets/icons/ai-chatbot.png';
import docflow from '../assets/icons/docflow.png';
import doodlePencil from '../assets/icons/doodle-pencil.png';
import doodlePhone from '../assets/icons/doodle-phone.png';
import placeholderGeneric from '../assets/icons/placeholder-generic.svg';

export interface Solution {
  key: ProblemKey;
  headlineStrikethrough: string;
  headlineCorrection: string;
  whatWeBuild: string[];
  videoSrc?: string;
  fallbackImageSrc: string;
}

export const solutions: Record<ProblemKey, Solution> = {
  'booking-chaos': {
    key: 'booking-chaos',
    // Strike = old chaos. Correction = the automated outcome.
    headlineStrikethrough: 'Patients messaging across five channels.',
    headlineCorrection: 'One WhatsApp link books the slot automatically.',
    whatWeBuild: [
      'Patients message in — the system books the slot, no back-and-forth',
      'Every booking lands in one place, no channel-checking required',
    ],
    videoSrc: '/videos/whatsapp-automation.mp4',
    fallbackImageSrc: placeholderGeneric,
  },
  'whatsapp-overload': {
    key: 'whatsapp-overload',
    // Strike = the daily grind of answering the same thing. Correction = it stops.
    headlineStrikethrough: 'Answering the same questions a hundred times a day.',
    headlineCorrection: 'Auto-replies handle it. You only see what needs you.',
    whatWeBuild: [
      'Instant auto-replies to FAQs, timings, and appointment requests',
      'Only conversations that actually need you reach you',
    ],
    videoSrc: '/videos/whatsapp-automation.mp4',
    fallbackImageSrc: whatsappDoodle,
  },
  'prescription-delays': {
    key: 'prescription-delays',
    // Strike = slow manual flow. Correction = it's instant and automatic.
    headlineStrikethrough: 'Writing it out, then sending it separately.',
    headlineCorrection: 'One tap. Prescription delivered to the patient on WhatsApp.',
    whatWeBuild: [
      'Save and send the prescription directly from the consultation screen',
      'Patient gets a PDF on WhatsApp the moment you hit send',
    ],
    videoSrc: '/videos/prescription.mp4',
    fallbackImageSrc: aiChatbot,
  },
  'no-shows': {
    key: 'no-shows',
    // Strike = silence before the appointment. Correction = automated nudges.
    headlineStrikethrough: 'No reminder, patient forgets, slot goes empty.',
    headlineCorrection: 'Reminders go out automatically before every appointment.',
    whatWeBuild: [
      "WhatsApp reminders sent automatically — you don't touch anything",
      'Patients can reschedule via a link, so you keep the slot either way',
    ],
    videoSrc: '/videos/whatsapp-automation.mp4',
    fallbackImageSrc: doodlePhone,
  },
  'reception-bottleneck': {
    key: 'reception-bottleneck',
    // Strike = everything bottlenecks at one desk. Correction = dashboard spreads it.
    headlineStrikethrough: 'Every booking and query funnelled through one desk.',
    headlineCorrection: 'Everything visible in one dashboard. No bottleneck.',
    whatWeBuild: [
      'All appointments, payments, and patient info in one screen',
      'Reception focuses on people, not managing five different places',
    ],
    videoSrc: '/videos/dashboard.mp4',
    fallbackImageSrc: placeholderGeneric,
  },
  'paper-records': {
    key: 'paper-records',
    // Strike = paper/manual chaos. Correction = digital, instant.
    headlineStrikethrough: 'History scattered across files, memory, and handwriting.',
    headlineCorrection: 'Patient notes captured digitally. Pulled up in seconds.',
    whatWeBuild: [
      'Consultation notes filled during the visit — no paper, no typing later',
      'Full history, prescriptions, and notes searchable on the next visit',
    ],
    videoSrc: '/videos/consultation-note.mp4',
    fallbackImageSrc: doodlePencil,
  },
  'missed-followups': {
    key: 'missed-followups',
    // Strike = relying on memory/nothing. Correction = it's tracked inside the consultation.
    headlineStrikethrough: 'Relying on memory to know who needs to come back.',
    headlineCorrection: 'Flag it in the note. Reminder goes out automatically.',
    whatWeBuild: [
      'Mark a follow-up inside the consultation — the system tracks it from there',
      'Patient gets a reminder when the time comes, without you doing anything',
    ],
    videoSrc: '/videos/appointments.mp4',
    fallbackImageSrc: docflow,
  },
  'manual-reminders': {
    key: 'manual-reminders',
    // Strike = calling patients one by one. Correction = it sends itself.
    headlineStrikethrough: 'Calling patients one by one to confirm appointments.',
    headlineCorrection: 'Reminders send themselves on WhatsApp.',
    whatWeBuild: [
      'Automated WhatsApp messages go out on your behalf — no calling',
      'Confirmations come back automatically so you know who is coming',
    ],
    videoSrc: '/videos/whatsapp-automation.mp4',
    fallbackImageSrc: doodlePhone,
  },
};
