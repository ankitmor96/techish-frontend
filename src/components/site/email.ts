import type { MouseEvent } from "react";
import { COMPANY_EMAIL } from "@/data/site";

export { COMPANY_EMAIL };

/**
 * Opens a Gmail compose window in a new tab so the email link always works —
 * even in sandboxed previews or on devices without a configured mail app.
 * The anchor keeps its `mailto:` href as a natural fallback.
 */
export function handleEmailClick(
  e: MouseEvent<HTMLAnchorElement>,
  subject?: string,
): void {
  e.preventDefault();
  const to = encodeURIComponent(COMPANY_EMAIL);
  const su = subject ? `&su=${encodeURIComponent(subject)}` : "";
  const body = `&body=${encodeURIComponent(
    "Hi Techish Innovations team,\n\n",
  )}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}${su}${body}`;
  window.open(gmailUrl, "_blank", "noopener,noreferrer");
}
