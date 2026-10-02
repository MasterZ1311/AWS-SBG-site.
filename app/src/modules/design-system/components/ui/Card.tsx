import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "elevated" | "well";
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

/**
 * Card Component
 * Flat bordered card following AWS SBGL Anti-Slop Design Guidelines.
 * Solid dark surfaces with precise 1px borders and subtle hover feedback.
 */
export function Card({
  variant = "default",
  children,
  className = "",
  glow = false,
  style,
  ...props
}: CardProps) {
  let baseClass = "card";
  if (variant === "interactive") baseClass = "card-interactive";
  else if (variant === "elevated") baseClass = "card-elevated";
  else if (variant === "well") baseClass = "well";

  const glowStyle: React.CSSProperties = glow
    ? {
        boxShadow: "0 0 24px rgba(255, 153, 0, 0.12)",
        borderColor: "var(--color-border-accent)",
      }
    : {};

  return (
    <div
      className={`${baseClass} ${className}`.trim()}
      style={{ ...glowStyle, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
