import React from "react";
import Badge, { BadgeVariant } from "./Badge";

export interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowVariant?: BadgeVariant;
  eyebrowPulse?: boolean;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

/**
 * SectionHeader Component
 * Canonical section headline lockup with eyebrow, H2 title, and description.
 */
export function SectionHeader({
  eyebrow,
  eyebrowVariant = "accent",
  eyebrowPulse = false,
  title,
  titleHighlight,
  description,
  align = "center",
  action,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`section-header ${className}`.trim()}
      style={{
        textAlign: isCenter ? "center" : "left",
        maxWidth: isCenter ? "780px" : "100%",
        margin: isCenter ? "0 auto 48px" : "0 0 36px",
        display: "flex",
        flexDirection: isCenter ? "column" : "row",
        justifyContent: isCenter ? "center" : "space-between",
        alignItems: isCenter ? "center" : "flex-end",
        gap: "24px",
      }}
    >
      <div style={{ flex: 1 }}>
        {eyebrow && (
          <div style={{ marginBottom: "16px" }}>
            <Badge variant={eyebrowVariant} size="sm" pulse={eyebrowPulse}>
              {eyebrow}
            </Badge>
          </div>
        )}

        <h2
          className="text-h1"
          style={{
            margin: "0 0 16px",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-accent-gradient">{titleHighlight}</span>
          )}
        </h2>

        {description && (
          <p
            className="text-body-lg"
            style={{
              margin: 0,
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        )}
      </div>

      {action && !isCenter && (
        <div style={{ flexShrink: 0 }}>
          {action}
        </div>
      )}
    </div>
  );
}

export default SectionHeader;
