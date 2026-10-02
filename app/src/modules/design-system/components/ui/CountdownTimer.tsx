"use client";

import React, { useState, useEffect } from "react";

export interface CountdownTimerProps {
  /** Target ISO date string, e.g. "2027-01-22T09:00:00+05:30" */
  targetDate?: string;
  eventName?: string;
  size?: "lg" | "md" | "sm";
  className?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

function calculateTimeRemaining(targetIso: string): TimeRemaining {
  const target = new Date(targetIso).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isExpired: false };
}

/**
 * CountdownTimer Component
 * Down-to-the-second live timer for upcoming hackathons and events.
 * Renders in Amazon Ember Mono Bold with segmented bordered cards.
 */
export function CountdownTimer({
  targetDate = "2027-01-22T09:00:00+05:30",
  eventName = "Kairos 2027 Kickoff",
  size = "lg",
  className = "",
}: CountdownTimerProps) {
  const [time, setTime] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(calculateTimeRemaining(targetDate));

    const interval = setInterval(() => {
      setTime(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { label: "DAYS", value: pad(time.days) },
    { label: "HOURS", value: pad(time.hours) },
    { label: "MINUTES", value: pad(time.minutes) },
    { label: "SECONDS", value: pad(time.seconds) },
  ];

  const digitFontSize =
    size === "lg" ? "clamp(20px, 2.6vw, 32px)" : size === "md" ? "22px" : "16px";
  const labelFontSize =
    size === "lg" ? "clamp(9px, 1vw, 11px)" : size === "md" ? "10px" : "9px";
  const boxPadding =
    size === "lg"
      ? "10px clamp(8px, 1.2vw, 14px)"
      : size === "md"
      ? "8px 12px"
      : "6px 8px";
  const minWidth =
    size === "lg" ? "clamp(56px, 6.2vw, 74px)" : size === "md" ? "60px" : "48px";
  const gap = size === "lg" ? "clamp(4px, 1vw, 8px)" : "6px";
  const colonSize =
    size === "lg" ? "clamp(16px, 2vw, 24px)" : size === "md" ? "18px" : "14px";

  if (!mounted) {
    // Initial server render placeholder
    return (
      <div
        className={`countdown-timer-container ${className}`.trim()}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
          gap,
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {["--", "--", "--", "--"].map((placeholder, idx) => (
          <React.Fragment key={idx}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth,
                flex: "0 1 auto",
                padding: boxPadding,
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: digitFontSize,
                  color: "var(--color-text-muted)",
                  lineHeight: 1,
                }}
              >
                {placeholder}
              </span>
            </div>
            {idx < 3 && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: colonSize,
                  color: "var(--color-border)",
                  userSelect: "none",
                  display: size === "sm" ? "none" : "block",
                  padding: "0 1px",
                }}
              >
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (time.isExpired) {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "16px 28px",
          borderRadius: "var(--radius-lg)",
          background: "rgba(16, 185, 129, 0.15)",
          border: "1px solid var(--color-success)",
        }}
      >
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "var(--color-success)",
            animation: "pulse 1.5s infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "18px",
            color: "var(--color-success)",
          }}
        >
          {eventName} IS LIVE NOW!
        </span>
      </div>
    );
  }

  return (
    <div
      className={`countdown-timer ${className}`.trim()}
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        gap,
        width: "100%",
        maxWidth: "100%",
        whiteSpace: "nowrap",
      }}
    >
      {units.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth,
              flex: "0 1 auto",
              padding: boxPadding,
              background: "var(--color-surface)",
              border: "1px solid var(--color-border-accent)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 0 16px rgba(255, 153, 0, 0.12)",
              transition: "transform 0.2s ease",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: digitFontSize,
                lineHeight: 1,
                color: "var(--color-accent)",
                letterSpacing: "-0.02em",
              }}
            >
              {unit.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: labelFontSize,
                letterSpacing: "0.08em",
                color: "var(--color-text-secondary)",
                marginTop: "6px",
                textTransform: "uppercase",
              }}
            >
              {unit.label}
            </span>
          </div>

          {index < units.length - 1 && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: colonSize,
                color: "var(--color-border-accent)",
                opacity: 0.6,
                userSelect: "none",
                display: size === "sm" ? "none" : "block",
                padding: "0 1px",
              }}
            >
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CountdownTimer;
