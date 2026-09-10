"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "./site-config";

const menuItems = [
  ["01", "What we handle", "#approach", "Assess / install / train"],
  ["02", "How it works", "#system", "Machine to screen"],
  ["03", "Starting points", "#use-cases", "One practical problem"],
  ["04", "Our principles", "#principles", "Built for small teams"],
  ["05", "Site assessment", "#assessment", "Start the conversation"],
];

function useScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function syncScrollState() {
      setIsScrolled(window.scrollY > 24);
    }
    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });
    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);
  return isScrolled;
}

export function IndustrialMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolled();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) requestAnimationFrame(() => firstLinkRef.current?.focus());
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || !isOpen) return;
      setIsOpen(false);
      triggerRef.current?.focus();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className={`menu-shell ${isScrolled ? "is-scrolled" : ""}`}>
      <button
        ref={triggerRef}
        className={`menu-trigger ${isOpen ? "is-active" : ""}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="service-menu"
        aria-label={isOpen ? "Close service menu" : "Open service menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="menu-trigger-label">{isOpen ? "CLOSE" : "MENU"}</span>
        <span className="menu-trigger-icon" aria-hidden="true"><i /><i /><i /></span>
      </button>

      <div id="service-menu" className={`menu-overlay ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="menu-plane menu-plane-dark" />
        <div className="menu-plane menu-plane-paper" />
        <div className="menu-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="menu-content">
          <div className="menu-intro">
            <span className="menu-kicker">SERVICE INDEX / 00</span>
            <strong>Choose<br />your next<br />move.</strong>
            <p>From the first plant walkthrough to the system your team uses every day.</p>
          </div>
          <nav className="menu-nav" aria-label="Service menu">
            {menuItems.map(([number, label, href, note], index) => (
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                className="menu-link"
                href={href}
                key={number}
                tabIndex={isOpen ? 0 : -1}
                onClick={closeMenu}
              >
                <span className="menu-link-number">{number}</span>
                <span className="menu-link-copy"><strong>{label}</strong><small>{note}</small></span>
                <span className="menu-link-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <aside className="menu-aside">
            <span>FIELD STATUS</span>
            <strong>ON-SITE<br />READY</strong>
            <div><i /> Hardware</div><div><i /> Software</div><div><i /> Support</div>
            <a href={siteConfig.contactHref} tabIndex={isOpen ? 0 : -1}>Email {siteConfig.email}</a>
          </aside>
        </div>
      </div>
    </div>
  );
}
