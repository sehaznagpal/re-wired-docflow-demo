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

  // ── ONLINE / BOTH PATH ── each of the 4 cards gets a distinct video ──

  'booking-chaos': {
    key: 'booking-chaos',
    headlineStrikethrough: 'Patients messaging across five channels.',
    headlineCorrection: "Every booking in one dashboard. Nothing slips.",
    whatWeBuild: [
      "Today's schedule, this week's, and every upcoming slot — all visible at a glance",
      'Bookings land in one place automatically, no channel-checking or missed DMs',
    ],
    videoSrc: '/videos/dashboard.mp4',
    fallbackImageSrc: placeholderGeneric,
  },

  'whatsapp-overload': {
    key: 'whatsapp-overload',
    headlineStrikethrough: 'Answering the same questions a hundred times a day.',
    headlineCorrection: 'Bot replies instantly. You only see what needs you.',
    whatWeBuild: [
      'Patients message in and get instant options — Book Appointment, Past Prescription, Connect with Team',
      'Only the conversations that need a human ever reach you',
    ],
    videoSrc: '/videos/whatsapp-automation.mp4',
    fallbackImageSrc: whatsappDoodle,
  },

  'prescription-delays': {
    key: 'prescription-delays',
    headlineStrikethrough: 'Writing it out, then sending it separately.',
    headlineCorrection: "One tap. Prescription PDF on the patient's WhatsApp.",
    whatWeBuild: [
      'Send the prescription directly from the consultation screen — one button',
      'Patient receives a PDF on WhatsApp the moment you hit send, nothing to type separately',
    ],
    videoSrc: '/videos/prescription.mp4',
    fallbackImageSrc: aiChatbot,
  },

  'no-shows': {
    key: 'no-shows',
    headlineStrikethrough: 'No reminder, patient forgets, slot goes empty.',
    headlineCorrection: 'Appointment saved and sent to the patient on WhatsApp.',
    whatWeBuild: [
      'Every appointment confirmation goes straight to the patient on WhatsApp — automatically',
      'Patients with it in writing show up. The system handles the nudge, not you',
    ],
    videoSrc: '/videos/appointments.mp4',
    fallbackImageSrc: doodlePhone,
  },

  // ── OFFLINE PATH ── 4 distinct videos within this path ──

  'reception-bottleneck': {
    key: 'reception-bottleneck',
    headlineStrikethrough: 'Every booking and query funnelled through one desk.',
    headlineCorrection: 'Everything visible in one dashboard. No bottleneck.',
    whatWeBuild: [
      "Today's appointments, this week's schedule, and monthly revenue — one screen",
      'Reception focuses on patients, not juggling five different channels at once',
    ],
    videoSrc: '/videos/dashboard.mp4',
    fallbackImageSrc: placeholderGeneric,
  },

  'paper-records': {
    key: 'paper-records',
    headlineStrikethrough: 'History scattered across files, memory, and handwriting.',
    headlineCorrection: 'Patient notes captured digitally. Pulled up in seconds.',
    whatWeBuild: [
      'Consultation notes filled in during the visit — no paper, no retyping later',
      'Full history searchable the next time the patient walks in',
    ],
    videoSrc: '/videos/consultation-note.mp4',
    fallbackImageSrc: doodlePencil,
  },

  'missed-followups': {
    key: 'missed-followups',
    headlineStrikethrough: 'Relying on memory to know who needs to come back.',
    headlineCorrection: 'Flag a follow-up in the note. Patient gets reminded automatically.',
    whatWeBuild: [
      'Tick "follow-up consultation" in the note — the system tracks it from there',
      'Patient receives a WhatsApp reminder when the time comes, without you doing anything',
    ],
    videoSrc: '/videos/appointments.mp4',
    fallbackImageSrc: docflow,
  },

  'manual-reminders': {
    key: 'manual-reminders',
    headlineStrikethrough: 'Calling patients one by one to confirm appointments.',
    headlineCorrection: 'Reminders send themselves on WhatsApp.',
    whatWeBuild: [
      'Automated WhatsApp messages go out on your behalf — no calling, no typing',
      'Patients can reply to confirm or reschedule, confirmations logged automatically',
    ],
    videoSrc: '/videos/whatsapp-automation.mp4',
    fallbackImageSrc: doodlePhone,
  },
};
