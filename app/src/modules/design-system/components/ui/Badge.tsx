import React from "react";

export type BadgeVariant =
  | "accent"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "default";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  pulse?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Badge / Pill Component
 * Standardized status indicators, tags, and category labels.
 */
export function Badge({
  variant = "default",
  size = "md",
  pulse = false,
  icon,
  children,
  className = "",
  style,
  ...props
}: BadgeProps) {
  const variantClass = `badge-${variant}`;
  const sizeClass = `badge-${size}`;

  return (
    <span
      className={`badge ${variantClass} ${sizeClass} ${className}`.trim()}
      style={{ display: "inline-flex", alignItems: "center", gap: "6px", ...style }}
      {...props}
    >
      {pulse && (
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "currentColor",
            display: "inline-block",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      )}
      {icon && <span style={{ display: "inline-flex" }}>{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
