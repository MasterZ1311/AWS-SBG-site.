"use client";

import React, { useEffect } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

/**
 * Modal Component
 * Accessible dialog modal for architecture diagram inspections, team profiles, and form submissions.
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "lg",
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let maxWidthPx = "780px";
  if (maxWidth === "sm") maxWidthPx = "440px";
  else if (maxWidth === "md") maxWidthPx = "600px";
  else if (maxWidth === "xl") maxWidthPx = "1080px";

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "rgba(8, 12, 20, 0.85)",
        backdropFilter: "blur(12px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="card-elevated"
        style={{
          width: "100%",
          maxWidth: maxWidthPx,
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border-accent)",
          borderRadius: "var(--radius-xl)",
          padding: "28px 32px",
          boxShadow: "0 24px 64px rgba(0, 0, 0, 0.6)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: "16px",
          }}
        >
          {title && (
            <h3
              className="text-h3"
              style={{ margin: 0, color: "var(--color-text)", fontWeight: 700 }}
            >
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: "none",
              border: "none",
              color: "var(--color-text-secondary)",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
