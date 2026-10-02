/**
 * AWS SBGL SIST — MAIN JAVASCRIPT ENTRY POINT
 * Version: 1.0.0
 * File: /src/js/main.js
 *
 * This file bootstraps all interactive behaviors:
 *  - Mobile hamburger navigation
 *  - Sticky header scroll effect
 *  - Telemetry counter animation
 *  - Dropdown keyboard accessibility
 *
 * Agent Note: Add page-specific JS in /js/pages/*.js and import here conditionally.
 */

'use strict';

// ─────────────────────────────────────────────────────────────────────────────
// STICKY HEADER — add .scrolled class after 20px scroll for shadow
// ─────────────────────────────────────────────────────────────────────────────
const header = document.getElementById('site-header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE HAMBURGER NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav      = document.getElementById('main-nav');

if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('nav-open');
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-overlay-active', isOpen);
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && mainNav.classList.contains('nav-open')) {
      mainNav.classList.remove('nav-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-overlay-active');
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// TELEMETRY COUNTER ANIMATION — count up numbers on scroll into view
// ─────────────────────────────────────────────────────────────────────────────
const animateCounter = (el) => {
  const target = parseInt(el.dataset.target, 10);
  if (!target || isNaN(target)) return;
  const duration = 1800;
  const start    = performance.now();

  const tick = (now) => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('en-IN') + '+';
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const telemetryItems = document.querySelectorAll('.telemetry-value[data-target]');
if (telemetryItems.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  telemetryItems.forEach((el) => observer.observe(el));
}

// ─────────────────────────────────────────────────────────────────────────────
// DROPDOWN KEYBOARD ACCESSIBILITY
// ─────────────────────────────────────────────────────────────────────────────
const dropdowns = document.querySelectorAll('.aws-nav-dropdown');
dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('.aws-nav-item');
  const menu    = dropdown.querySelector('.aws-dropdown-menu');

  if (!trigger || !menu) return;

  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const isOpen = menu.classList.toggle('dropdown-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    }
    if (e.key === 'Escape') {
      menu.classList.remove('dropdown-open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ACTIVE NAV LINK HIGHLIGHT — marks the current page link
// ─────────────────────────────────────────────────────────────────────────────
const currentPath = window.location.pathname;
document.querySelectorAll('.aws-nav-item').forEach((link) => {
  link.classList.remove('active');
  const href = link.getAttribute('href');
  if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

console.info('[AWS SBGL SIST] main.js initialized ✅');
