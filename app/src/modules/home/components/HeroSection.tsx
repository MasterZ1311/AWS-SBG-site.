"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteData } from "@/data/site-data";

// ─── COUNTER ANIMATION HOOK ───────────────────────────────────────────────────
function useCounterAnimation(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          el.textContent = Math.floor(eased * target).toLocaleString("en-IN") + "+";
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}

// ─── INDIVIDUAL KPI ITEM ─────────────────────────────────────────────────────
function KpiItem({ value, label, numericTarget }: { value: string; label: string; numericTarget?: number }) {
  const counterRef = useCounterAnimation(numericTarget ?? 0);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "0 var(--spacing-lg)",
        borderRight: "1px solid var(--color-border-subtle)",
      }}
    >
      <span className="telemetry-value" ref={numericTarget ? counterRef : undefined}>
        {numericTarget ? "0+" : value}
      </span>
      <span className="telemetry-label">{label}</span>
    </div>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      style={{
        paddingTop: "var(--spacing-4xl)",
        paddingBottom: "var(--spacing-4xl)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient accent glow — subtle only, no over-illumination */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(255,153,0,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-md" style={{ position: "relative", textAlign: "center" }}>

        {/* ── EYEBROW BADGE ── */}
        <div
          role="status"
          aria-live="polite"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            background: "var(--color-success-subtle)",
            border: "1px solid var(--color-success-border)",
            borderRadius: "var(--radius-full)",
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--color-success)",
            fontFamily: "var(--font-mono)",
            marginBottom: "var(--spacing-lg)",
          }}
        >
          <span aria-hidden="true">●</span>
          Official Amazon Web Services Student Community &nbsp;·&nbsp; 600+ Campuses Global
        </div>

        {/* ── H1 HEADLINE ── */}
        <h1
          id="hero-headline"
          style={{
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "var(--spacing-md)",
          }}
        >
          We Don&apos;t Just Learn the Cloud.{" "}
          <br />
          <span className="text-accent-gradient">We Engineer the Future.</span>
        </h1>

        {/* ── SUBHEADLINE ── */}
        <p
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "var(--color-text-secondary)",
            lineHeight: 1.65,
            maxWidth: "680px",
            margin: "0 auto var(--spacing-xl)",
          }}
        >
          The premier student cloud development community at Sathyabama Institute of Science
          and Technology. Hands-on serverless labs, production agentic AI, collaborative group
          study cohorts, and high-stakes national hackathons.
        </p>

        {/* ── CTA ROW ── */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "var(--spacing-3xl)",
          }}
        >
          <Link href="/events/upcoming" className="btn btn-primary btn-lg" id="hero-cta-primary">
            Explore Upcoming Events →
          </Link>
          <Link href="/sponsors" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
            Download Pitch Deck
          </Link>
        </div>

        {/* ── TELEMETRY STRIP ── */}
        <div
          className="telemetry-strip"
          id="telemetry-strip"
          aria-label="Live chapter metrics"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${siteData.kpis.length}, 1fr)`,
            overflow: "hidden",
          }}
        >
          {siteData.kpis.map((kpi, i) => (
            <div
              key={kpi.label}
              style={{
                textAlign: "center",
                padding: "var(--spacing-md) var(--spacing-lg)",
                borderRight: i < siteData.kpis.length - 1
                  ? "1px solid var(--color-border-subtle)"
                  : "none",
              }}
            >
              {kpi.numericTarget ? (
                <KpiItem value={kpi.value} label={kpi.label} numericTarget={kpi.numericTarget} />
              ) : (
                <>
                  <span className="telemetry-value">{kpi.value}</span>
                  <span className="telemetry-label">{kpi.label}</span>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
