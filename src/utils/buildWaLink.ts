import { WHATSAPP_NUMBER } from '../config/appConfig';

export function buildWaLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildLeadMessage(name: string, clinic: string, topProblemLabel: string): string {
  return `Hi, I'm ${name} from ${clinic}. I went through the demo, my biggest issue is ${topProblemLabel}. Can we talk?`;
}

export const GENERIC_MESSAGE = "Hi, I'd like to know more about Re-Wired.";
