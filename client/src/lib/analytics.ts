/**
 * Google Analytics 4 Setup and Event Tracking
 * 
 * This module handles all GA4 event tracking for Evergreen Vale
 * Replace MEASUREMENT_ID with your actual GA4 measurement ID
 */

// Initialize Google Analytics 4
export const initializeGA4 = (measurementId: string) => {
  if (typeof window === "undefined") return;

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", measurementId, {
    page_path: window.location.pathname,
  });

  // Make gtag globally available
  (window as any).gtag = gtag;
};

// Event tracking functions
export const trackEvent = (
  eventName: string,
  eventData: Record<string, any> = {}
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag.event(eventName, eventData);
  }
};

// Patreon specific events
export const trackPatreonClick = (position: string = "unknown") => {
  trackEvent("patreon_click", {
    event_category: "engagement",
    event_label: "patreon_button",
    position: position,
  });
};

export const trackPatreonCardView = (position: string = "unknown") => {
  trackEvent("patreon_card_view", {
    event_category: "engagement",
    event_label: "patreon_card",
    position: position,
  });
};

// Game events
export const trackGameStart = (characterName: string, gender: string, archetype: string) => {
  trackEvent("game_start", {
    event_category: "game",
    event_label: "character_created",
    character_name: characterName,
    character_gender: gender,
    character_archetype: archetype,
  });
};

export const trackSceneView = (sceneId: string, day: number, period: string) => {
  trackEvent("scene_view", {
    event_category: "game",
    event_label: "scene_viewed",
    scene_id: sceneId,
    day: day,
    period: period,
  });
};

export const trackChoice = (sceneId: string, choiceIndex: number, choiceText: string) => {
  trackEvent("game_choice", {
    event_category: "game",
    event_label: "choice_made",
    scene_id: sceneId,
    choice_index: choiceIndex,
    choice_text: choiceText,
  });
};

// Page events
export const trackPageView = (pageName: string) => {
  trackEvent("page_view", {
    event_category: "navigation",
    event_label: "page_viewed",
    page_name: pageName,
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", {
    event_category: "engagement",
    event_label: "button_clicked",
    button_name: buttonName,
    location: location,
  });
};
