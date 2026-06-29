import { motion } from 'framer-motion';
import type { ScreenProps } from './screenTypes';
import docflow from '../assets/icons/docflow.png';

export default function Screen0Greeting({ onNext }: ScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6 relative">
      <span className="absolute top-5 right-5 inline-block rounded-full bg-bg-cream text-text-muted text-xs px-3 py-1">
        Interactive Demo
      </span>

      <span className="font-display font-bold text-xl text-text-primary">Re-Wired</span>

      <motion.img
        src={docflow}
        alt=""
        className="w-32 h-32 object-contain"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* TODO: optional background video slot — currently disabled */}
      {/* <video muted loop autoPlay playsInline className="hidden" /> */}

      <h1 className="font-display font-bold text-3xl text-text-primary max-w-md">
        Most clinics lose patients to bad WhatsApp replies, not bad doctors.
      </h1>
      <p className="text-text-muted max-w-sm">
        Let's find out what's actually slowing your practice down.
      </p>

      <button
        onClick={onNext}
        className="rounded-full bg-accent-teal text-white px-8 py-3 font-medium mt-2"
      >
        Show me how →
      </button>
    </div>
  );
}
