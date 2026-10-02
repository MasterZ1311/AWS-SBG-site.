import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

/**
 * Button Component
 * Renders as Next.js Link, external anchor, or native HTML button.
 * Enforces strict compliance with AWS SBGL external link protocols.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  iconPosition = "left",
  children,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const combinedClass = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  const isExternal = external ?? (href ? href.startsWith("http") || href.startsWith("//") : false);

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span style={{ display: "inline-flex", marginRight: "6px" }}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span style={{ display: "inline-flex", marginLeft: "6px" }}>{icon}</span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClass}
          style={style}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClass} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} style={style} {...props}>
      {content}
    </button>
  );
}

export default Button;
