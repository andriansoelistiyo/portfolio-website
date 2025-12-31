// Google Analytics Event Tracking Utilities

// Declare gtag function type
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track generic events
 */
export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventLabel?: string,
  eventValue?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  }
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', 'engagement', `${buttonName} - ${location}`);
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (linkName: string, url: string) => {
  trackEvent('external_link_click', 'outbound', `${linkName}: ${url}`);
};

/**
 * Track navigation clicks
 */
export const trackNavigation = (sectionName: string, source: string) => {
  trackEvent('navigation_click', 'navigation', `${sectionName} from ${source}`);
};

/**
 * Track contact method clicks
 */
export const trackContactClick = (method: string, location: string) => {
  trackEvent('contact_click', 'conversion', `${method} - ${location}`);
};

/**
 * Track project interactions
 */
export const trackProjectClick = (projectName: string, action: string) => {
  trackEvent('project_interaction', 'engagement', `${projectName} - ${action}`);
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', 'engagement', `${depth}%`, depth);
};

/**
 * Track download events
 */
export const trackDownload = (fileName: string, location: string) => {
  trackEvent('download', 'conversion', `${fileName} - ${location}`);
};

/**
 * Track social media clicks
 */
export const trackSocialClick = (platform: string, location: string) => {
  trackEvent('social_click', 'social_media', `${platform} - ${location}`);
};

/**
 * Track section views (when user scrolls to a section)
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', 'engagement', sectionName);
};
