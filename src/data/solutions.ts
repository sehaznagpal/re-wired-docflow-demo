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
  whyThisHappens: string;
  whatWeBuild: string[];
  // PLACEHOLDER (PRD §7.1): no solution demo video exists yet for any problem key.
  // Leave undefined until a real clip is dropped into /src/assets/video/.
  videoSrc?: string;
  fallbackImageSrc: string;
}

export const solutions: Record<ProblemKey, Solution> = {
  'booking-chaos': {
    key: 'booking-chaos',
    headlineStrikethrough: 'Booking chaos',
    headlineCorrection: 'One link, every booking, one dashboard.',
    whyThisHappens:
      'Patients book through calls, DMs, walk-ins, and forms. Nothing talks to the others, so slots clash and people fall through the cracks.',
    whatWeBuild: [
      'A single booking link that works across WhatsApp, Instagram, and your website',
      'Automated booking confirmations and reminders, no manual typing',
      'One dashboard for every appointment, payment, and record',
    ],
    fallbackImageSrc: placeholderGeneric,
  },
  'whatsapp-overload': {
    key: 'whatsapp-overload',
    headlineStrikethrough: 'WhatsApp overload',
    headlineCorrection: 'Same questions, answered automatically.',
    whyThisHappens:
      'Most of what comes into your WhatsApp is repeat questions. Answering them by hand eats hours you could spend with patients.',
    whatWeBuild: [
      'An AI chat assistant that handles FAQs, timings, and pricing instantly',
      'Smart routing so only the messages that need you reach you',
      'A shared inbox so your team never double-replies',
    ],
    fallbackImageSrc: whatsappDoodle,
  },
  'prescription-delays': {
    key: 'prescription-delays',
    headlineStrikethrough: 'Prescription delays',
    headlineCorrection: 'Prescriptions written in seconds, sent automatically.',
    whyThisHappens:
      'Writing out a prescription by hand, then sending it separately, adds minutes to every single consult.',
    whatWeBuild: [
      'Templated, one-tap prescriptions you can edit per patient',
      'Auto-delivered straight to the patient on WhatsApp after the consult',
      'A searchable history of every prescription you have written',
    ],
    fallbackImageSrc: aiChatbot,
  },
  'no-shows': {
    key: 'no-shows',
    headlineStrikethrough: 'No-shows',
    headlineCorrection: 'Reminders that actually get sent, every time.',
    whyThisHappens:
      'Patients forget. Without a system nudging them, you only find out when the slot is already empty.',
    whatWeBuild: [
      'Automated reminders sent a day and an hour before the appointment',
      'One-tap reschedule links so patients fix their own slot instead of no-showing',
    ],
    fallbackImageSrc: doodlePhone,
  },
  'reception-bottleneck': {
    key: 'reception-bottleneck',
    headlineStrikethrough: 'Reception bottleneck',
    headlineCorrection: 'A back-office that runs even when reception is slammed.',
    whyThisHappens:
      'Every booking, query, and follow-up goes through one desk. When it is busy, everything backs up.',
    whatWeBuild: [
      'Self-serve booking and reminders that do not need a person at the desk',
      'Patient records your whole team can pull up instantly, not buried in a drawer',
      'Admin tasks automated so reception handles people, not paperwork',
    ],
    fallbackImageSrc: placeholderGeneric,
  },
  'paper-records': {
    key: 'paper-records',
    headlineStrikethrough: 'Paper records',
    headlineCorrection: 'Every patient history, in one searchable place.',
    whyThisHappens:
      'Files get misplaced, handwriting gets misread, and history scattered across folders means you are reconstructing context every visit.',
    whatWeBuild: [
      'Digital patient records you can pull up in seconds',
      'Searchable history across every past visit and prescription',
      'No change to your in-person workflow, this just backs it up',
    ],
    fallbackImageSrc: doodlePencil,
  },
  'missed-followups': {
    key: 'missed-followups',
    headlineStrikethrough: 'Missed follow-ups',
    headlineCorrection: 'Automatic nudges for every patient due to return.',
    whyThisHappens:
      'Without a system tracking who needs a follow-up and when, it relies on memory, and memory fails.',
    whatWeBuild: [
      'Automatic follow-up reminders based on each patient\'s treatment timeline',
      'A simple list of who is due, updated daily, no manual tracking',
    ],
    fallbackImageSrc: docflow,
  },
  'manual-reminders': {
    key: 'manual-reminders',
    headlineStrikethrough: 'Manual reminders',
    headlineCorrection: 'Reminders that send themselves.',
    whyThisHappens:
      'Calling every patient individually to confirm an appointment is hours of work that a message could do instantly.',
    whatWeBuild: [
      'Automated WhatsApp reminders sent on your behalf, no calling required',
      'Confirmations logged automatically so you know who is actually coming',
    ],
    fallbackImageSrc: doodlePhone,
  },
};
