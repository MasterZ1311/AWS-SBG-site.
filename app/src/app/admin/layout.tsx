import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Officer Command Center",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      {children}
    </div>
  );
}
