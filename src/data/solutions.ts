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
    headlineStrikethrough: 'Booking chaos',
    headlineCorrection: 'One link. Every channel. One dashboard.',
    whatWeBuild: [
      'Patients book via WhatsApp, Instagram, or your website — all in one place',
      'Automated confirmations go out instantly, no manual typing',
    ],
    videoSrc: '/videos/appointments.mp4',
    fallbackImageSrc: placeholderGeneric,
  },
  'whatsapp-overload': {
    key: 'whatsapp-overload',
    headlineStrikethrough: 'WhatsApp overload',
    headlineCorrection: 'Same questions, answered automatically.',
    whatWeBuild: [
      'An AI assistant handles FAQs, timings, and pricing without you',
      'Only messages that actually need you reach you',
    ],
    videoSrc: '/videos/whatsapp-automation.mp4',
    fallbackImageSrc: whatsappDoodle,
  },
  'prescription-delays': {
    key: 'prescription-delays',
    headlineStrikethrough: 'Prescription delays',
    headlineCorrection: 'Written in seconds. Sent automatically.',
    whatWeBuild: [
      'One-tap templated prescriptions, editable per patient',
      'Delivered straight to the patient on WhatsApp after the consult',
    ],
    videoSrc: '/videos/prescription.mp4',
    fallbackImageSrc: aiChatbot,
  },
  'no-shows': {
    key: 'no-shows',
    headlineStrikethrough: 'No-shows',
    headlineCorrection: 'Reminders that actually get sent, every time.',
    whatWeBuild: [
      'Automated reminders sent a day and an hour before the appointment',
      'One-tap reschedule link — patients fix their own slot, not you',
    ],
    videoSrc: '/videos/appointments.mp4',
    fallbackImageSrc: doodlePhone,
  },
  'reception-bottleneck': {
    key: 'reception-bottleneck',
    headlineStrikethrough: 'Reception bottleneck',
    headlineCorrection: 'A back-office that runs when reception is slammed.',
    whatWeBuild: [
      'Self-serve booking and reminders without a person at the desk',
      'Every appointment, payment, and query visible from one dashboard',
    ],
    videoSrc: '/videos/dashboard.mp4',
    fallbackImageSrc: placeholderGeneric,
  },
  'paper-records': {
    key: 'paper-records',
    headlineStrikethrough: 'Paper records',
    headlineCorrection: 'Every patient history, in one searchable place.',
    whatWeBuild: [
      'Consultation notes captured digitally, pulled up in seconds',
      'Searchable history across every past visit and prescription',
    ],
    videoSrc: '/videos/consultation-note.mp4',
    fallbackImageSrc: doodlePencil,
  },
  'missed-followups': {
    key: 'missed-followups',
    headlineStrikethrough: 'Missed follow-ups',
    headlineCorrection: 'Automatic nudges for every patient due to return.',
    whatWeBuild: [
      'Follow-up messages sent automatically based on treatment timeline',
      'A daily list of who is due — no manual tracking',
    ],
    videoSrc: '/videos/whatsapp-automation.mp4',
    fallbackImageSrc: docflow,
  },
  'manual-reminders': {
    key: 'manual-reminders',
    headlineStrikethrough: 'Manual reminders',
    headlineCorrection: 'Reminders that send themselves.',
    whatWeBuild: [
      'Automated WhatsApp reminders sent on your behalf, no calling',
      'Confirmations logged automatically so you know who is coming',
    ],
    videoSrc: '/videos/appointments.mp4',
    fallbackImageSrc: doodlePhone,
  },
};
