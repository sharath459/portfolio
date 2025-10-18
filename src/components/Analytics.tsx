"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Google Analytics Measurement ID - Replace with your actual ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

// Track page views
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const url = pathname + searchParams.toString();
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for common actions
export const trackResumeDownload = () => {
  trackEvent("download", "Resume", "Resume PDF");
};

export const trackProjectClick = (projectName: string) => {
  trackEvent("click", "Project", projectName);
};

export const trackContactFormSubmit = () => {
  trackEvent("submit", "Contact Form", "Contact Form Submission");
};

export const trackSocialClick = (platform: string) => {
  trackEvent("click", "Social Media", platform);
};

export const trackSectionView = (sectionName: string) => {
  trackEvent("view", "Section", sectionName);
};

// TypeScript declarations for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
