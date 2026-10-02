"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { siteData, BUILDER_CENTER_URL } from "@/data/site-data";

// ─── SVG ICONS (inline — no external icon dep needed yet) ────────────────────
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0-2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function MeetupIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.34 11.23c-.11-.47-.32-.9-.6-1.28l1.45-1.45a1.14 1.14 0 0 0 0-1.61l-1.61-1.61a1.14 1.14 0 0 0-1.61 0l-1.45 1.45c-.38-.28-.81-.49-1.28-.6V4.08a1.14 1.14 0 0 0-1.14-1.14h-2.28a1.14 1.14 0 0 0-1.14 1.14v1.99c-.47.11-.9.32-1.28.6l-1.45-1.45a1.14 1.14 0 0 0-1.61 0l-1.61 1.61a1.14 1.14 0 0 0 0 1.61l1.45 1.45c-.28.38-.49.81-.6 1.28H4.08a1.14 1.14 0 0 0-1.14 1.14v2.28c0 .63.51 1.14 1.14 1.14h1.99c.11.47.32.9.6 1.28l-1.45 1.45a1.14 1.14 0 0 0 0 1.61l1.61 1.61a1.14 1.14 0 0 0 1.61 0l1.45-1.45c.38.28.81.49 1.28.6v1.99c0 .63.51 1.14 1.14 1.14h2.28c.63 0 1.14-.51 1.14-1.14v-1.99c.47-.11.9-.32 1.28-.6l1.45 1.45a1.14 1.14 0 0 0 1.61 0l1.61-1.61a1.14 1.14 0 0 0 0-1.61l-1.45-1.45c.28-.38.49-.81.6-1.28h1.99c.63 0 1.14-.51 1.14-1.14v-2.28a1.14 1.14 0 0 0-1.14-1.14h-1.99zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
    </svg>
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {isOpen ? (
        <>
          <line x1="4" y1="4" x2="16" y2="16" />
          <line x1="16" y1="4" x2="4" y2="16" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="17" y2="6"  />
          <line x1="3" y1="10" x2="17" y2="10" />
          <line x1="3" y1="14" x2="17" y2="14" />
        </>
      )}
    </svg>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function SiteHeader() {
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (href: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(href);
  };

  const handleDropdownLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220); // 220ms grace period so moving cursor between button and menu never drops
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change & cleanup timeout
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#site-header")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const socialIconMap: Record<string, React.ReactNode> = {
    instagram: <InstagramIcon />,
    linkedin:  <LinkedInIcon />,
    meetup:    <MeetupIcon />,
  };

  return (
    <>
      <header
        id="site-header"
        role="banner"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: "64px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: isScrolled
            ? "var(--color-border)"
            : "var(--color-border-subtle)",
          backgroundColor: "rgba(11,15,23,0.93)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transition: "border-color 0.25s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            width: "100%",
          }}
        >
          {/* ── BRANDMARK ── */}
          <Link
            href="/"
            aria-label="AWS Student Builder Group SIST — Home"
            style={{ padding: "8px 14px", flexShrink: 0, display: "flex", alignItems: "center" }}
          >
            <Image
              src="/assets/brandmark/AWS Student Builder Group_RGB_Brandmark_White.png"
              alt="AWS Student Builder Group"
              width={160}
              height={40}
              priority
              style={{ height: "32px", width: "auto" }}
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav aria-label="Main Navigation" style={{ display: "flex", alignItems: "center", gap: "4px" }}
               className="hidden lg:flex">
            {siteData.nav.map((item) => (
              <div
                key={item.href}
                style={{ position: "relative" }}
                onMouseEnter={() => item.children && handleDropdownEnter(item.href)}
                onMouseLeave={() => item.children && handleDropdownLeave()}
              >
                {item.children ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
                      onFocus={() => handleDropdownEnter(item.href)}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "8px 12px",
                        borderRadius: "var(--radius-md)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: activeDropdown === item.href ? "var(--color-text)" : "var(--color-text-secondary)",
                        background: activeDropdown === item.href ? "var(--color-accent-subtle)" : "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--font-display)",
                        transition: "color 0.15s, background 0.15s",
                      }}
                    >
                      {item.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        style={{
                          transition: "transform 0.2s ease",
                          transform: activeDropdown === item.href ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <polyline points="2,4 6,8 10,4" />
                      </svg>
                    </button>

                    {/* Dropdown with zero-gap hit-area bridge */}
                    {activeDropdown === item.href && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          paddingTop: "6px", // Invisible bridge connecting button to menu
                          zIndex: 100,
                        }}
                        onMouseEnter={() => handleDropdownEnter(item.href)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div
                          role="menu"
                          style={{
                            minWidth: "190px",
                            background: "var(--color-surface-elevated)",
                            border: "1px solid var(--color-border-accent)",
                            borderRadius: "var(--radius-lg)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 16px rgba(255, 153, 0, 0.1)",
                            padding: "6px",
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                              style={{
                                display: "block",
                                padding: "9px 14px",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--color-text-secondary)",
                                borderRadius: "var(--radius-md)",
                                textDecoration: "none",
                                transition: "color 0.15s, background 0.15s",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                                (e.currentTarget as HTMLElement).style.background = "var(--color-accent-subtle)";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                                (e.currentTarget as HTMLElement).style.background = "none";
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "var(--radius-md)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.15s, background 0.15s",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                      (e.currentTarget as HTMLElement).style.background = "var(--color-accent-subtle)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                      (e.currentTarget as HTMLElement).style.background = "none";
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            {/* Social icons — desktop only */}
            <div className="hidden md:flex" style={{ alignItems: "center", gap: "4px" }}>
              {siteData.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${s.platform}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-md)",
                    color: "var(--color-text-muted)",
                    transition: "color 0.15s, background 0.15s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                    (e.currentTarget as HTMLElement).style.background = "var(--color-accent-subtle)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                    (e.currentTarget as HTMLElement).style.background = "none";
                  }}
                >
                  {socialIconMap[s.platform]}
                </a>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href={BUILDER_CENTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta"
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              Create Builder ID
            </a>

            {/* Hamburger — mobile */}
            <button
              id="hamburger-btn"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="lg:hidden"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                background: "none",
                cursor: "pointer",
                color: "var(--color-text)",
              }}
            >
              <HamburgerIcon isOpen={mobileOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE NAV DRAWER ── */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          role="navigation"
          aria-label="Mobile Navigation"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--color-surface-sunken)",
            borderTop: "1px solid var(--color-border)",
            zIndex: 999,
            overflowY: "auto",
            padding: "16px",
          }}
        >
          {siteData.nav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  borderRadius: "var(--radius-lg)",
                  textDecoration: "none",
                  marginBottom: "4px",
                }}
              >
                {item.label}
              </Link>
              {item.children && (
                <div style={{ paddingLeft: "16px", marginBottom: "8px" }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "8px 16px",
                        fontSize: "13px",
                        color: "var(--color-text-secondary)",
                        borderRadius: "var(--radius-md)",
                        textDecoration: "none",
                        marginBottom: "2px",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ marginTop: "24px", padding: "0 16px" }}>
            <a
              href={BUILDER_CENTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMobileOpen(false)}
            >
              Create Builder ID — 100% Free
            </a>
          </div>
        </div>
      )}
    </>
  );
}
