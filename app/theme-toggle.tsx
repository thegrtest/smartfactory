"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function setDocumentTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  try {
    window.localStorage.setItem("wwbdataautomation-theme", theme);
  } catch {
    // The visual theme still works when browser storage is unavailable.
  }
  window.dispatchEvent(new Event("wwbdataautomation-theme-change"));
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("wwbdataautomation-theme-change", onChange);
  return () => window.removeEventListener("wwbdataautomation-theme-change", onChange);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setDocumentTheme(nextTheme);
  }

  const nextLabel = theme === "dark" ? "light" : "dark";
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${nextLabel} mode`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-orb" aria-hidden="true"><i /></span>
      <span className="theme-toggle-label">{nextLabel}</span>
    </button>
  );
}
